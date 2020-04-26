import styled from "styled-components";
import {
  StyledArticleHeaderImagerProps,
  StyledArticleContentWrapperProps,
} from "../../shared/types";

export const StyledArticleHeaderImageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1905px;
  max-height: 970px;
  overflow: hidden;
  overflow-x: hidden;
  position: absolute;
  right: 0;
  left: 0;
  z-index: -1;
`;

export const StyledArticleHeaderImage = styled.img`
  max-width: 100%;
  filter: ${(props: StyledArticleHeaderImagerProps) =>
    `brightness(${props.brightness}%)`};
`;

export const StyledArticleHeaderTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  top: 440px;
  font-family: "Montserrat", sans-serif;
`;

export const StyledArticleHeaderTitle = styled.p`
  color: white;
  font-size: 40px;
  font-weight: 600;
  position: absolute;
`;

export const StyledArticleHeaderInfo = styled.div`
  position: relative;
  top: 50px;
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: space-between;

  p {
    margin-right: 100px;
  }

  p:last-of-type {
    margin-right: 0;
  }
`;

export const StyledArticleContentWrapper = styled.div`
  /* display: flex;
  justify-content: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: ${(props: StyledArticleContentWrapperProps) =>
    props.editor ? "relative" : "absolute"};
  top: ${(props) => (props.editor ? "100px" : "1050px")};
`;

export const StyledArticleContentText = styled.p`
  margin-bottom: 100px;
  position: relative;
  width: 780px;
  font-size: 22px;
  font-family: "PT Serif", serif;
  word-break: break-word;
`;

export const StyledArticleEditorButton = styled.img`
  width: 48px;
  filter: invert(100%);
  position: absolute;
  right: 40px;

  &:hover {
    cursor: pointer;
  }
`;
