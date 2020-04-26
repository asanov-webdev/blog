import React from "react";
import {
  StyledArticleCard,
  StyledArticleCardImg,
  StyledArticleCardTheme,
  StyledArticleCardTitle,
  StyledArticleCardInfo,
} from "./styles";
import moment from "moment";
import watched from "../../../assets/svg/watched.svg";
import clock from "../../../assets/svg/clock.svg";
import { Link } from "react-router-dom";
import { ArticleCardProps } from "../../../shared/types";

export const ArticleCard = (props: ArticleCardProps) => {
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
    <StyledArticleCard>
      <StyledArticleCardImg src={image} brightness={brightness} />
      <StyledArticleCardTheme>{theme}</StyledArticleCardTheme>
      <Link to={`/articles/${id}`}>
        <StyledArticleCardTitle>{title}</StyledArticleCardTitle>
      </Link>
      <StyledArticleCardInfo>
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
      </StyledArticleCardInfo>
    </StyledArticleCard>
  );
};

export default ArticleCard;
