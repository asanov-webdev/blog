import React from "react";
import {
  StyledArticleContentWrapper,
  StyledArticleContentText
} from "./styles";
import ReactMarkdown from "react-markdown/with-html";

export const ArticleContent = props => {
  const { article, articleImages } = props;

  return (
    <StyledArticleContentWrapper>
      <StyledArticleContentText>
        <ReactMarkdown source={article.content} escapeHtml={false} />
      </StyledArticleContentText>
    </StyledArticleContentWrapper>
  );
};

export default ArticleContent;
