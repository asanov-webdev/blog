import React from "react";
import "./styles.css";
import { themes } from "../../../shared/themes";
import ArticleCard from "./ArticleCard";
import {
  DBArticle,
  DBArticleImage,
  ArticleListProps,
} from "../../../shared/types";

export const ArticleList = (props: ArticleListProps) => {
  return props.mainImages[0] === undefined ? (
    <p>loading...</p>
  ) : (
    <div className="list-block">
      {props.articles
        .filter((article: DBArticle) => article.theme === props.filter)
        .sort(
          (article1: DBArticle, article2: DBArticle) =>
            article2.id - article1.id
        )
        .map((article: DBArticle) => {
          const mainImage = props.mainImages.find(
            (image: DBArticleImage) => image.article === article.id
          );

          return (
            <ArticleCard
              id={article.id}
              image={
                mainImage !== undefined
                  ? mainImage.image_file.replace("media", "static")
                  : "error"
              }
              brightness={mainImage !== undefined ? mainImage.brightness : 100}
              theme={themes[article.theme]}
              title={article.title}
              views_amount={article.views_amount}
              reading_time={article.reading_time}
              publish_date={article.publish_date}
            />
          );
        })}
    </div>
  );
};

export default ArticleList;
