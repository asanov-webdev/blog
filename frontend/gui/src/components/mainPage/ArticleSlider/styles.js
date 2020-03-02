import styled from "styled-components";

export const StyledArticleSlide = styled.div`
  background: #fff;
  width: 90% !important;
`;

export const StyledArticleSlideImg = styled.img`
  height: 500px;
  border-radius: 25px;
`;

export const StyledArticleSlideTheme = styled.p`
  text-transform: uppercase;
  color: #ffc46b;
  text-shadow: 2px 2px 4px black;
  font-family: "Montserrat", sans-serif;
  position: relative;
  bottom: 220px;
  left: 60px;
  font-size: 20px;
  font-weight: 700;
`;

export const StyledArticleSlideTitle = styled.p`
  color: white;
  text-shadow: 2px 2px 4px black;
  font-family: "Montserrat", sans-serif;
  position: relative;
  bottom: 200px;
  left: 60px;
  font-size: 30px;
  font-weight: 700;
`;

export const StyledArticleSlideInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  position: relative;
  bottom: 180px;
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
      font-size: 14px;
    }
  }
`;