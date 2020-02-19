import styled from "styled-components";

export const StyledHeaderFirst = styled.div`
  height: 50px;
  width: 100%;
  background: #2b2b28;
  display: flex;
  align-items: center;
`;

export const StyledHeaderSecond = styled.div`
  height: 100px;
  background: #fff;
  display: flex;
  border-bottom: 1px solid black;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeaderFirstLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 500px;
  margin-left: 100px;
  font-family: "Montserrat", sans-serif;

  a {
    text-decoration: none;
    color: white;
    transition: 0.3s color ease-in-out;
  }

  a:hover {
    color: #b1b1a4;
  }
`;

export const StyledHeaderFirstSocials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 200px;
  margin-left: 690px;
`;

export const StyledHeaderFirstLoginButton = styled.button`
  width: 100px;
  height: 30px;
  border: 2px solid white;
  border-radius: 25px;
  background: #2b2b28;
  color: white;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  margin-left: 100px;
  transition: 0.3s all ease-in-out;

  &:hover {
    color: #b1b1a4;
    cursor: pointer;
    border: 2px solid #b1b1a4;
  }
`;

export const StyledHeaderFirstVerticalLine = styled.div`
  width: 2px;
  height: 35px;
  background-color: white;
  opacity: 0.8;
  margin-left: 30px;
`;

export const StyledHeaderFirstCurrentDay = styled.p`
  color: white;
  font-size: 30px;
  margin-left: 30px;
  font-family: "Montserrat", sans-serif;
  cursor: default;
`;

export const StyledHeaderFirstMonthAndDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  height: 50px;
  font-family: "Montserrat", sans-serif;
`;

export const StyledHeaderFirstCurrentMonth = styled.p`
  color: white;
  text-transform: uppercase;
  font-size: 15px;
  cursor: default;
`;

export const StyledHeaderFirstCurrentYear = styled.p`
  color: white;
  font-size: 12px;
  cursor: default;
`;

export const StyledSocialIcon = styled.img`
  width: 24px;
  filter: invert(100%);
  transition: 0.3s filter ease-in-out;

  &:hover {
    filter: invert(69.5%);
  }
`;

export const StyledHeaderSecondThemesWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
`;

export const StyledHeaderSecondThemes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 700px;
  font-family: "Montserrat", sans-serif;
`;

export const StyledHeaderSecondTheme = styled.p`
  color: #2b2b28;
  text-transform: uppercase;
  font-weight: normal;
  transition: 0.3s text-shadow ease-in-out;

  &:hover {
    text-shadow: 0.4px 0.4px black;
    cursor: pointer;
  }
`;

export const StyledHeaderSecondThemeMore = styled.span`
  width: 14px;
  margin-left: 2px;
  position: relative;
  color: #000;
  bottom: 0.5px;
`;

export const StyledHeaderSecondLogo = styled.div`
  height: 70px;
  width: 250px;
  border: 1px solid black;
  box-sizing: border-box;
  margin-left: 100px;
  display: none;
`;

export const StyledHeaderSecondFunctions = styled.div`
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
