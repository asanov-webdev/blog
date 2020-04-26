import React from "react";
import {
  StyledArticleContentWrapper,
  StyledArticleContentText,
} from "./styles";
import ReactMarkdown from "react-markdown/with-html";
import { ArticleProps } from "../../shared/types";

export const ArticleContent = (props: ArticleProps) => {
  const { article } = props;

  return (
    <StyledArticleContentWrapper>
      <StyledArticleContentText>
        <ReactMarkdown source={article.content} escapeHtml={false} />
      </StyledArticleContentText>
    </StyledArticleContentWrapper>
  );
};

export default ArticleContent;
