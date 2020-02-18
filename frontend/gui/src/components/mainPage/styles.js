import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 10vh;
  min-height: 93.69px;
  background: #2b2b28;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeaderLogo = styled.h1`
  color: white;
  font-size: 40px;
  font-family: "Roboto";
  margin-left: 100px;

  a {
    text-decoration: none;
    color: white;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const StyledHeaderFunctions = styled.div`
  display: flex;
  justify-content: space-between;
  height: 6vh;
`;

export const StyledHeaderSearchInput = styled.input`
  width: 140px;
  height: 6vh;
  min-height: 56.22px;
  border: none;
  border-radius: 25px;
  margin-right: 20px;
  background: #fff;
  transition: all 0.3s ease-out;
  padding-left: 20px;
  padding-right: 62px;
  font-style: ${props => !props.value && "italic"};

  &:focus {
    width: 300px;
    outline: none;
  }
`;

export const StyledHeaderSearch = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledNoArticlesFound = styled.div`
  font-size: 30px;
  font-family: "Roboto";
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledSearchIcon = styled.img`
  width: 24px;
  position: relative;
  right: 85px;
  margin-left: 25px;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledHeaderAuthenticateIcon = styled.img`
  width: 30px;
  margin-right: 100px;
  -webkit-filter: invert(100%);

  &:hover {
    cursor: pointer;
  }
`;

export const StyledSidebar = styled.div`
  min-width: 100px;
  border-right: 1px solid #d9cfce;
  align-self: flex-start;
`;

const HoveredThemeColor = [
  "#f58c8d",
  "#fcd383",
  "#7b8b96",
  "#ffb091",
  "#bed9fa"
];

export const StyledSidebarElement = styled.div`
  border-bottom: 1px solid #d9cfce;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  background: #f8f8f8;
  transition: all 0.2s ease-out;

  &:hover {
    background: ${props => HoveredThemeColor[props.index]};
    cursor: pointer;
  }
`;

export const StyledThemeIcon = styled.img`
  width: 40px;
`;

export const StyledArticlePreviewBlock = styled.div`
  max-width: 800px;
  margin: 40px 0;
  margin-right: 40px;
  font-family: "Roboto";
  position: relative;
`;

export const StyledPreviewImage = styled.img`
  max-width: 400px;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledPreviewInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  font-size: 14px;
  opacity: 0.7;
`;

export const StyledPreviewContent = styled.div`
  padding-left: 6%;
  padding-right: 6%;
  padding-top: 30px;
  padding-bottom: 30px;
  border: 1px solid #d9cfce;
  border-top: none;
  position: relative;
  bottom: 5px;
  background: #f8f8f8;
`;

export const StyledPreviewDate = styled.p`
  margin-right: 40px;
`;

export const StyledPreviewTitle = styled.h2`
  margin-bottom: 30px;
  max-width: 340px;

  a {
    text-decoration: none;
    color: black;
  }

  &:hover a {
    cursor: pointer;
    color: red;
  }
`;

export const StyledPreviewStarter = styled.p`
  max-width: 340px;
`;

export const StyledMainContent = styled.div`
  display: flex;
`;

export const StyledPreviewIcon = styled.img`
  width: 24px;
  margin-right: 10px;
`;

export const StyledArticlePreviewList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 40px;
`;
