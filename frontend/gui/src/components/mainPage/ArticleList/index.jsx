import React from "react";
import "./styles.css";
import { themes } from "../../../shared/themes";
import ArticleCard from "./ArticleCard";

export const ArticleList = (props) => {
  return props.mainImages[0] === undefined ? (
    <p>loading...</p>
  ) : (
    <div className="list-block">
      {props.articles
        .filter((article) => article.theme === props.filter)
        .sort((article1, article2) => article2.id - article1.id)
        .map((article) => {
          const mainImage = props.mainImages.find(
            (image) => image.article === article.id
          );

          return (
            <ArticleCard
              id={article.id}
              image={mainImage.image_file.replace("media", "static")}
              brightness={mainImage.brightness}
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
