import React from "react";
import {
  StyledArticleSlide,
  StyledArticleSlideImg,
  StyledArticleSlideTheme,
  StyledArticleSlideTitle,
  StyledArticleSlideInfo
} from "./styles";
import moment from "moment";
import watched from "../../../assets/svg/watched.svg";
import clock from "../../../assets/svg/clock.svg";

export const ArticleSlide = props => {
  const {
    image,
    theme,
    title,
    views_amount,
    reading_time,
    publish_date
  } = props;

  console.log(props.publish_date);

  return (
    <StyledArticleSlide>
      <StyledArticleSlideImg src={image} />
      <StyledArticleSlideTheme>{theme}</StyledArticleSlideTheme>
      <StyledArticleSlideTitle>{title}</StyledArticleSlideTitle>
      <StyledArticleSlideInfo>
        <div>
          <p>
            {moment(
              moment(publish_date).format("YYYYMMDD"),
              "YYYYMMDD"
            ).fromNow()}
          </p>
        </div>
        <div>
          <img src={clock} />
          <p>{reading_time} min read</p>
        </div>
        <div>
          <img src={watched} />
          <p>{views_amount}</p>
        </div>
      </StyledArticleSlideInfo>
    </StyledArticleSlide>
  );
};

export default ArticleSlide;
