import React from "react";
import { StyledArticle } from "./styles";

export const Article = props => {
  const { title, theme, publish_date, reading_time, views_amount } = props;

  return <StyledArticle>{title}</StyledArticle>;
};

export default Article;
