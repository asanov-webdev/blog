import React, { useState, useEffect } from "react";
import { fetchLatestArticles } from "../../../api";
import Article from "./Article";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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
    dots: true,
    infinite: false,
    // variableWidth: false,
    outerEdgeLimit: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    initialSlide: 0.175
  };

  return (
    <Slider {...settings} className='my-slider'>
      <div className='slide-div'>
        <img className="slide-img" src={one} />
      </div>
      <div className='slide-div'>
        <img className="slide-img" src={two} />
      </div>
      <div className='slide-div'>
        <img className="slide-img" src={three} />
      </div>
      <div className='slide-div'>
        <img className="slide-img" src={four} />
      </div>
    </Slider>
  );

  // return (
  //   <Carousel
  //     showArrows={false}
  //     showStatus={false}
  //     showIndicators={false}
  //     showThumbs={false}
  //     swipeScrollTolerance={10}
  //     useKeyboardArrows
  //     infiniteLoop
  //     emulateTouch
  //     centerMode
  //     className="carousel"
  //   >
  //     <div>
  //       <img className='slide-img' src={one} />
  //       <p className='slide-p'>Test123</p>
  //     </div>
  //     <div>
  //       <img className='slide-img' src={two} />
  //       <p>2</p>
  //     </div>
  //     <div>
  //       <img className='slide-img' src={three} />
  //       <p>3</p>
  //     </div>
  //     <div>
  //       <img className='slide-img' src={four} />
  //       <p>4</p>
  //     </div>
  //   </Carousel>
  // );
};

export default ArticleSlider;
