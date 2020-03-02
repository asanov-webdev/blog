import React, { useState, useEffect } from "react";
import { fetchLatestArticlesPreviews } from "../../../api";
import ArticleSlide from "./ArticleSlide";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const themes = {
  LI: "LITERATURE",
  FI: "FILMS",
  GA: "GAMES",
  MU: "MUSIC",
  NE: "NEWS"
};

export const ArticleSlider = () => {
  const [articles, setArticles] = useState([]);
  const [mainImages, setMainImages] = useState([]);

  useEffect(() => {
    fetchLatestArticlesPreviews().then(response => {
      setArticles(response[0]);
      setMainImages(response[1]);
    });
  }, []);

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    infinite: true,
    arrows: true,
    speed: 600
  };

  return mainImages[0] === undefined ? (
    <p>loading...</p>
  ) : (
    <div className="container">
      <Slider {...settings}>
        {articles.map(article => (
          <ArticleSlide
            image={mainImages
              .find(image => image.article === article.id)
              .image_file.replace("media", "static")}
            theme={themes[article.theme]}
            title={article.title}
            views_amount={article.views_amount}
            reading_time={article.reading_time}
            publish_date={article.publish_date}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ArticleSlider;
