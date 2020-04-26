import React, { useState, useEffect } from "react";
import { fetchLatestArticlesPreviews } from "../../api";
import Header from "./Header/index";
import ArticleSlider from "./ArticleSlider/index";
import ArticleList from "./ArticleList/index";
import { DBArticle, DBArticleImage } from "../../shared/types";

export const Main = () => {
  const [articles, setArticles] = useState<Array<DBArticle>>([]);
  const [mainImages, setMainImages] = useState<Array<DBArticleImage>>([]);
  const [filter, setFilter] = useState("LI");

  const filterCallback = (filterValue: string) => setFilter(filterValue);

  useEffect(() => {
    fetchLatestArticlesPreviews().then((response) => {
      setArticles(response[0]);
      setMainImages(response[1]);
    });
  }, []);

  return (
    <React.Fragment>
      <Header callback={filterCallback} />
      <ArticleSlider mainImages={mainImages} articles={articles} />
      <ArticleList
        mainImages={mainImages}
        articles={articles}
        filter={filter}
      />
    </React.Fragment>
  );
};

export default Main;
