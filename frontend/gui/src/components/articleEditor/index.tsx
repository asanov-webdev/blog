import React, { useState, useEffect, ChangeEvent } from "react";
import {
  fetchArticleById,
  addImage,
  fetchAllImages,
  editArticleTitle,
} from "../../api";
import {
  StyledArticleEditorWrapper,
  StyledFunctionsBlockWrapper,
  StyledButtonWrapper,
  StyledButton,
  StyledImageUrlList,
  StyledImageUrlListWrapper,
  StyledImageUrl,
  StyledEditorFunctionsBlock,
  StyledFunctionsIcon,
  StyledImageFormWrapper,
} from "./styles";
import {
  StyledArticleContentWrapper,
  StyledArticleContentText,
} from "../article/styles";
import "./styles.css";
import TextareaAutosize from "react-autosize-textarea";
import ReactMarkdown from "react-markdown/with-html";
import { editArticleContent } from "../../api";
import { DBArticle, DBArticleImage, LoadedImage } from "../../shared/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchImagesAction } from "../../actions";

export const ArticleEditor = (props: any) => {
  const articleId = Number(props.match.params.id);
  const [article, setArticle] = useState<DBArticle>();
  const dispatch = useDispatch();
  const images = useSelector((state) => state.entity.images);

  useEffect(() => {
    fetchArticleById(articleId).then((article) => {
      setArticle(article);
      setText(article.content);
      setTitle(article.title);
    });
    fetchAllImages().then((images) => {
      const imagesWithKeys = images
        .filter((image: DBArticleImage) => image.article === articleId)
        .map((image: DBArticleImage) => ({ ...image, key: image.id }));
      dispatch(fetchImagesAction(imagesWithKeys));
    });
  }, []);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isInEditMode, setIsInEditMode] = useState(true);
  const [isInImagesMode, setIsInImagesMode] = useState(false);
  const [highlightedElement, setHighlightedElement] = useState({
    value: "",
    start: 0,
    end: 0,
  });
  const [loadedImage, setLoadedImage] = useState<LoadedImage>();

  let textAreaRef = React.createRef<HTMLTextAreaElement>();

  const svgIcons = importAll(
    require.context("../../assets/svg/editor", false, /\.(svg)$/)
  );

  function importAll(r: any) {
    return r.keys().map(r);
  }

  function handleContentChange(newText: string) {
    setText(newText);
  }

  function handleTitleChange(newTitle: string) {
    setTitle(newTitle);
  }

  function saveChanges() {
    if (article) {
      if (article.content !== text) {
        editArticleContent(article, text);
      }
      if (article.title !== title) {
        editArticleTitle(article, title);
      }
    } else {
      console.log("Error: article is undefined!");
    }
  }

  function updateHighlightedElement() {
    const textArea = textAreaRef.current;
    if (textArea !== null) {
      setHighlightedElement({
        value: textArea.value.substring(
          textArea.selectionStart,
          textArea.selectionEnd
        ),
        start: textArea.selectionStart,
        end: textArea.selectionEnd,
      });
    }
  }

  function addTag(startingTag: string, endingTag: string) {
    if (highlightedElement !== null) {
      setText(
        [
          text.slice(0, highlightedElement.start),
          `${startingTag}${highlightedElement.value}${endingTag}`,
          text.slice(highlightedElement.end),
        ].join("")
      );
    }
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target) {
      if (!article) {
        console.log("Error: article is undefined!");
      } else if (!event.target.files) {
        console.log("Error: event.target.files is null!");
      } else {
        setLoadedImage({
          article: article.id,
          image_file: event.target.files[0],
        });
      }
    }
  }

  function handleImageUpload(event: React.FormEvent) {
    if (event.target) {
      event.preventDefault();
      if (loadedImage) {
        let formData = new FormData();
        formData.append("article", loadedImage.article.toString());
        formData.append("image_file", loadedImage.image_file);
        addImage(formData);
      } else {
        console.log("Error: loadedImage is undefined!");
      }
    }
  }

  if (images.length === 0 || article === undefined) {
    return <p>loading..</p>;
  }

  return (
    <React.Fragment>
      <StyledFunctionsBlockWrapper>
        <StyledEditorFunctionsBlock>
          <StyledFunctionsIcon
            src={svgIcons[0]}
            onClick={() => addTag("<strong>", "</strong>")}
          />
          <StyledFunctionsIcon
            src={svgIcons[1]}
            onClick={() => addTag("<em>", "</em>")}
          />
          <StyledFunctionsIcon
            src={svgIcons[2]}
            onClick={() =>
              addTag("<span className='underlined-text'>", "</span>")
            }
          />
          <StyledFunctionsIcon
            src={svgIcons[3]}
            onClick={() => addTag("<del>", "</del>")}
          />
          <StyledFunctionsIcon
            src={svgIcons[4]}
            onClick={() => addTag("<code>", "</code>")}
          />
          <StyledFunctionsIcon
            src={svgIcons[5]}
            onClick={() => addTag("<br>", "")}
          />
          <StyledFunctionsIcon
            src={svgIcons[6]}
            onClick={() => addTag("<center>", "</center>")}
          />
        </StyledEditorFunctionsBlock>
      </StyledFunctionsBlockWrapper>
      <StyledButtonWrapper>
        <StyledButton
          onClick={() => {
            setIsInEditMode(!isInEditMode);
          }}
        >
          {isInEditMode ? "Preview Mode" : "Editor Mode"}
        </StyledButton>
        <StyledButton onClick={() => saveChanges()}>Save</StyledButton>
        <StyledButton
          onClick={() => {
            setIsInImagesMode(!isInImagesMode);
          }}
        >
          Add image
        </StyledButton>
      </StyledButtonWrapper>
      {isInImagesMode && (
        <React.Fragment>
          <StyledImageUrlListWrapper>
            <StyledImageUrlList>
              {images.map((image) => (
                <StyledImageUrl
                  src={`${image.image_file.replace("media", "static")}`}
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `<img className='image-big' src=${image.image_file.replace(
                        "media",
                        "static"
                      )}/>`
                    );
                  }}
                />
              ))}
            </StyledImageUrlList>
          </StyledImageUrlListWrapper>
          <StyledImageFormWrapper>
            <form
              encType="multipart/form-data"
              onSubmit={(event) => handleImageUpload(event)}
            >
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={(event) => handleImageChange(event)}
              />
              <input type="submit" />
            </form>
          </StyledImageFormWrapper>
        </React.Fragment>
      )}
      {isInEditMode ? (
        <StyledArticleEditorWrapper>
          <TextareaAutosize
            className="editing-text editing-title"
            onChange={(event) =>
              handleTitleChange((event.target as HTMLTextAreaElement).value)
            }
            value={title}
          />
          <TextareaAutosize
            className="editing-text"
            onChange={(event) =>
              handleContentChange((event.target as HTMLTextAreaElement).value)
            }
            value={text}
            onMouseUp={() => updateHighlightedElement()}
            ref={textAreaRef}
          />
        </StyledArticleEditorWrapper>
      ) : (
        <StyledArticleContentWrapper editor={true}>
          <p className="editing-text editing-title">{title}</p>
          <StyledArticleContentText>
            <ReactMarkdown source={text} escapeHtml={false} />
          </StyledArticleContentText>
        </StyledArticleContentWrapper>
      )}
    </React.Fragment>
  );
};

export default ArticleEditor;
