import React, { useState, useEffect } from "react";
import "./styles.css";
import ArticlePreview from "./ArticlePreview";
import { StyledArticlePreviewList, StyledNoArticlesFound } from "./styles";
import { fetchArticles, fetchAllImages } from "../../api";

export const ArticleList = props => {
  const { searchValue, sortingThemeIndex } = props;
  const [articles, setArticles] = useState([]);
  const [images, setImages] = useState([]);

  const themes = ["LI", "FI", "GA", "MU", "NE"];

  useEffect(() => {
    fetchArticles().then(articles => {
      const articlesWithKeys = articles.map(article => ({
        ...article,
        key: article.id
      }));
      setArticles(articlesWithKeys);
    });
    fetchAllImages().then(images => {
      const imagesWithKeys = images.map(image => ({
        ...image,
        key: image.id
      }));
      setImages(imagesWithKeys);
    });
  }, []);

  function filterArticles() {
    let filteredArticles = articles;
    if (searchValue) {
      filteredArticles = articles.filter(
        article =>
          article.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          article.starter.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    if (sortingThemeIndex !== null) {
      filteredArticles = articles.filter(
        article => article.theme === themes[sortingThemeIndex]
      );
    }
    return filteredArticles;
  }

  const articlePreviews = filterArticles()
    .map(article => {
      const articleImages = images.filter(
        image => image.article === article.id
      );
      return (
        <ArticlePreview
          key={article.id}
          id={article.id}
          images={articleImages}
          theme={article.theme}
          title={article.title}
          starter={article.starter}
          date={article.publish_date}
          watched={article.views_amount}
        />
      );
    })
    .filter(preview => preview !== undefined);

  // if (articlePreviews.length === 0)
  //   return (
  //     <StyledNoArticlesFound>
  //       Извините, но по вашему запросу статьи не найдены 🙁
  //     </StyledNoArticlesFound>
  //   );

  return <StyledArticlePreviewList>{articlePreviews}</StyledArticlePreviewList>;
};

export default ArticleList;
