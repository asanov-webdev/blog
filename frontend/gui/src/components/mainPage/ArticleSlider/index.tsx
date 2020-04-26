import React from "react";
import ArticleSlide from "./ArticleSlide";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { themes } from "../../../shared/themes";

export const ArticleSlider = (props) => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    infinite: true,
    arrows: true,
    speed: 600,
  };

  return props.mainImages[0] === undefined ? (
    <p>loading...</p>
  ) : (
    <div className="container">
      <Slider {...settings}>
        {props.articles
          .sort((article) => article.publish_date)
          .slice(-4)
          .sort(
            (article1, article2) =>
              article2.id - article1.id
          )
          .map((article) => {
            const mainImage = props.mainImages.find(
              (image) => image.article === article.id
            );

            return (
              <ArticleSlide
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
      </Slider>
    </div>
  );
};

export default ArticleSlider;
