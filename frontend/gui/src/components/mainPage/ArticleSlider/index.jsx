import React, { useState, useEffect } from "react";
import { fetchLatestArticles } from "../../../api";
import Article from "./Article";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";
import one from "../../../assets/1.jpg";
import two from "../../../assets/2.jpg";
import three from "../../../assets/3.jpg";
import four from "../../../assets/4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const ArticleSlider = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchLatestArticles().then(response => setArticles(response));
  }, []);

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    infinite: true,
    arrows: true,
    speed: 600
  };

  return (
    <div className="container">
      <Slider {...settings}>
        <div className="slide-div">
          <img className="slide-img" src={one} />
        </div>
        <div className="slide-div">
          <img className="slide-img" src={two} />
        </div>
        <div className="slide-div">
          <img className="slide-img" src={three} />
        </div>
        <div className="slide-div">
          <img className="slide-img" src={four} />
        </div>
      </Slider>
    </div>
  );
};

export default ArticleSlider;
