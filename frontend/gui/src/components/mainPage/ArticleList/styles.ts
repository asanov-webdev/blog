import styled from "styled-components";
import { StyledArticleCardImgProps } from "../../../shared/types";

export const StyledArticleCard = styled.div`
  background: #fff;
  margin-left: 20px;

  a {
    text-decoration: none;
  }
`;

export const StyledArticleCardImg = styled.img`
  height: 244px;
  border-radius: 10px;
  filter: ${(props: StyledArticleCardImgProps) =>
    `brightness(${props.brightness}%)`};
`;

export const StyledArticleCardTheme = styled.p`
  text-transform: uppercase;
  color: #ffc46b;
  text-shadow: 2px 2px 4px black;
  font-family: "Montserrat", sans-serif;
  position: relative;
  bottom: 120px;
  left: 60px;
  font-size: 14px;
  font-weight: 700;
`;

export const StyledArticleCardTitle = styled.p`
  color: white;
  text-shadow: 2px 2px 4px black;
  font-family: "Montserrat", sans-serif;
  position: relative;
  bottom: 110px;
  left: 60px;
  font-size: 24px;
  font-weight: 700;
`;

export const StyledArticleCardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  position: relative;
  bottom: 100px;
  left: 60px;
  color: #cbcccb;
  font-family: "Montserrat", sans-serif;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      filter: invert(80%);
      width: 24px;
      margin-right: 10px;
    }

    p {
      font-size: 12px;
    }
  }
`;
