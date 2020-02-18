import React, { useState, useEffect, useMemo } from "react";
import {
  fetchArticleById,
  addImage,
  fetchAllImages,
  editArticleTitle
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
  StyledImageFormWrapper
} from "./styles";
import {
  StyledArticleContentWrapper,
  StyledArticleContentText
} from "../article/styles";
import "./styles.css";
import TextareaAutosize from "react-autosize-textarea";
import ReactMarkdown from "react-markdown/with-html";
import { editArticleContent } from "../../api";

export const ArticleEditor = props => {
  const articleId = Number(props.match.params.id);
  const [article, setArticle] = useState();
  const [articleImages, setArticleImages] = useState([]);

  useEffect(() => {
    fetchArticleById(articleId).then(article => {
      setArticle(article);
      setText(article.content);
      setTitle(article.title);
    });
    fetchAllImages().then(images => {
      const imagesWithKeys = images
        .filter(image => image.article === articleId)
        .map(image => ({ ...image, key: image.id }));
      setArticleImages(imagesWithKeys);
    });
  }, []);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isInEditMode, setIsInEditMode] = useState(true);
  const [isInImagesMode, setIsInImagesMode] = useState(false);
  const [highlightedElement, setHighlightedElement] = useState({
    value: "",
    start: 0,
    end: 0
  });
  const [loadedImage, setLoadedImage] = useState({
    article: null,
    image_file: null
  });

  let textAreaRef = React.createRef();

  const svgIcons = importAll(
    require.context("../../assets/svg/editor", false, /\.(svg)$/)
  );

  function importAll(r) {
    return r.keys().map(r);
  }

  function handleContentChange(newText) {
    setText(newText);
  }

  function handleTitleChange(newTitle) {
    setTitle(newTitle);
  }

  function saveChanges() {
    if (article.content !== text) {
      editArticleContent(article, text);
    }
    if (article.title !== title) {
      editArticleTitle(article, title);
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
        end: textArea.selectionEnd
      });
    }
  }

  function addTag(startingTag, endingTag) {
    if (highlightedElement !== null) {
      setText(
        [
          text.slice(0, highlightedElement.start),
          `${startingTag}${highlightedElement.value}${endingTag}`,
          text.slice(highlightedElement.end)
        ].join("")
      );
    }
  }

  function handleImageChange(event) {
    if (event.target) {
      setLoadedImage({
        article: article.id,
        image_file: event.target.files[0]
      });
    }
  }

  function handleImageUpload(event) {
    if (event.target) {
      event.preventDefault();
      let formData = new FormData();
      formData.append("article", loadedImage.article);
      formData.append("image_file", loadedImage.image_file);
      addImage(formData);
    }
  }

  if (articleImages.length === 0 || article === undefined) {
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
              {articleImages.map(image => (
                <StyledImageUrl
                  src={`${image.image_file.replace("media", "static")}`}
                  onClick={() => {
                    console.log("you clicked");
                    navigator.clipboard.writeText(
                      `<img className='image-big' src=${image.image_file.replace(
                        "media",
                        "static"
                      )}/>`
                    );
                    console.log(navigator.clipboard.readText());
                  }}
                />
              ))}
            </StyledImageUrlList>
          </StyledImageUrlListWrapper>
          <StyledImageFormWrapper>
            <form
              encType="multipart/form-data"
              onSubmit={event => handleImageUpload(event)}
            >
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={event => handleImageChange(event)}
              >
                {/* <img src={svgIcons[7]} /> */}
              </input>
              <input type="submit" />
            </form>
          </StyledImageFormWrapper>
        </React.Fragment>
      )}
      {isInEditMode ? (
        <StyledArticleEditorWrapper>
          <TextareaAutosize
            className="editing-text editing-title"
            onChange={event => handleTitleChange(event.target.value)}
            value={title}
          />
          <TextareaAutosize
            className="editing-text"
            onChange={event => handleContentChange(event.target.value)}
            value={text}
            onMouseUp={() => updateHighlightedElement()}
            ref={textAreaRef}
          />
        </StyledArticleEditorWrapper>
      ) : (
        <StyledArticleContentWrapper editor>
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
