import React, { useState, useEffect } from "react";
import "./styles.css";
import {
  StyledArticlePreviewBlock,
  StyledPreviewImage,
  StyledPreviewInfo,
  StyledPreviewDate,
  StyledPreviewTitle,
  StyledPreviewStarter,
  StyledPreviewContent,
  StyledPreviewIcon
} from "./styles";
import watched_eye from "../../assets/svg/17watched.svg";
import calendar from "../../assets/svg/5calendar.svg";
import moment from "moment";
import { Link } from "react-router-dom";

export const ArticlePreview = props => {
  const { id, images, theme, title, starter, date, watched } = props;

  const mainImage = images.find(image => image.is_main);

  return (
    <StyledArticlePreviewBlock>
      <Link to={`/articles/${id}`}>
        <StyledPreviewImage
          src={`${mainImage.image_file.replace("media", "static")}`}
        />
      </Link>
      <StyledPreviewContent>
        <StyledPreviewInfo>
          <StyledPreviewIcon src={calendar} />
          <StyledPreviewDate>
            {moment(date).format("DD.MM.YY")}
          </StyledPreviewDate>
          <StyledPreviewIcon src={watched_eye} />
          <p>{watched}</p>
        </StyledPreviewInfo>
        <StyledPreviewTitle>
          <Link to={`/articles/${id}`}>{title}</Link>
        </StyledPreviewTitle>
        <StyledPreviewStarter>{starter}...</StyledPreviewStarter>
      </StyledPreviewContent>
    </StyledArticlePreviewBlock>
  );
};

export default ArticlePreview;
