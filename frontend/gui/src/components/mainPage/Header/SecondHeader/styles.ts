import styled from "styled-components";

export const StyledSecondHeader = styled.div`
  height: 100px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.div`
  height: 70px;
  width: 250px;
  border: 1px solid black;
  box-sizing: border-box;
  margin-left: 100px;
  display: none;
`;

export const StyledThemesWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
`;

export const StyledThemes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 700px;
  font-family: "Montserrat", sans-serif;
`;

export const StyledTheme = styled.p`
  color: #2b2b28;
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0.9;
  transition: 0.3s text-shadow ease-in-out;

  &:hover {
    text-shadow: 0.4px 0.4px black;
    opacity: 1;
    cursor: pointer;
  }
`;

export const StyledThemeMore = styled.span`
  width: 14px;
  margin-left: 2px;
  position: relative;
  color: #000;
  bottom: 0.5px;
`;

export const StyledFunctions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 150px;
  right: 100px;
  position: absolute;

  img {
    width: 24px;
    opacity: 0.5;
    transition: 0.3s opacity ease-in-out;

    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;
