import React from "react";
import {
  StyledArticleHeaderImageWrapper,
  StyledArticleHeaderImage,
  StyledArticleHeaderTitle,
  StyledArticleHeaderTextWrapper,
  StyledArticleHeaderInfo,
  StyledArticleEditorButton
} from "./styles";
import moment from "moment";
import { Link } from "react-router-dom";
import edit from "../../assets/svg/8edit.svg";

export const ArticleHeader = props => {
  const { article, articleImages } = props;

  const mainImage = articleImages.find(image => image.is_main);

  return (
    <React.Fragment>
      <StyledArticleHeaderImageWrapper>
        <StyledArticleHeaderImage
          src={`${mainImage.image_file.replace("media", "static")}`}
          brightness={mainImage.brightness}
        />
      </StyledArticleHeaderImageWrapper>
      <StyledArticleHeaderTextWrapper>
        <StyledArticleHeaderTitle>{article.title}</StyledArticleHeaderTitle>
        <StyledArticleHeaderInfo>
          <p>{moment(article.publish_date).format("MMM D, YYYY")}</p>
          <p>{article.reading_time} minute read</p>
          <p>{article.views_amount} views</p>
        </StyledArticleHeaderInfo>
      </StyledArticleHeaderTextWrapper>
      <Link
        to={{
          pathname: `/articles/${article.id}/edit`
        }}
      >
        <StyledArticleEditorButton src={edit} />
      </Link>
    </React.Fragment>
  );
};

export default ArticleHeader;
