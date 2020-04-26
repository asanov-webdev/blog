import React from "react";
import {
  StyledArticleSlide,
  StyledArticleSlideImg,
  StyledArticleSlideTheme,
  StyledArticleSlideTitle,
  StyledArticleSlideInfo,
} from "./styles";
import moment from "moment";
import watched from "../../../assets/svg/watched.svg";
import clock from "../../../assets/svg/clock.svg";
import { Link } from "react-router-dom";
import { ArticleSlideProps } from "../../../shared/types";

export const ArticleSlide = (props: ArticleSlideProps) => {
  const {
    id,
    image,
    brightness,
    theme,
    title,
    views_amount,
    reading_time,
    publish_date,
  } = props;

  return (
    <StyledArticleSlide>
      <StyledArticleSlideImg src={image} brightness={brightness} />
      <StyledArticleSlideTheme>{theme}</StyledArticleSlideTheme>
      <Link to={`/articles/${id}`}>
        <StyledArticleSlideTitle>{title}</StyledArticleSlideTitle>
      </Link>
      <StyledArticleSlideInfo>
        <div>
          <p>
            {moment(
              moment(publish_date).format("YYYYMMDDHH"),
              "YYYYMMDDHH"
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
