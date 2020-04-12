import React, { useState, useEffect } from "react";
import { fetchLatestArticlesPreviews } from "../../api";
import Header from "./Header/index";
import ArticleSlider from "./ArticleSlider/index";
import ArticleList from "./ArticleList/index";

export const Main = () => {
  const [articles, setArticles] = useState([]);
  const [mainImages, setMainImages] = useState([]);
  const [filter, setFilter] = useState("LI");

  const filterCallback = (filterValue) => setFilter(filterValue);

  useEffect(() => {
    fetchLatestArticlesPreviews().then((response) => {
      setArticles(response[0]);
      setMainImages(response[1]);
      console.log(response[0][0].theme);
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
