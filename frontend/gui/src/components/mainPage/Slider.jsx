import React, { useState, useEffect } from "react";
import { Slider as SlickSlider } from "react-slick";
import { fetchLatestArticles } from "../../api";
import { SliderArticle } from "./SliderArticle";

export const Slider = () => {
  const [articles, setArticles] = useState([]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
    fetchLatestArticles().then(articles => setArticles(articles));
  }, []);

  return (
    // <SlickSlider {...sliderSettings}>
    //   {articles.map(article => (
    //     <SliderArticle {...article} />
    //   ))}
    // </SlickSlider>
    <div></div>
  );
};

export default Slider;
