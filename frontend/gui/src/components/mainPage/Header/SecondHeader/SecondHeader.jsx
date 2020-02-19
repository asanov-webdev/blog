import React from "react";
import {
  StyledSecondHeader,
  StyledLogo,
  StyledThemesWrapper,
  StyledThemes,
  StyledTheme,
  StyledThemeMore,
  StyledFunctions
} from "./styles";
import styles from "./styles.css";
import bolt from "../../../../assets/svg/bolt.svg";
import search from "../../../../assets/svg/search.svg";
import share from "../../../../assets/svg/share.svg";
import bookmark from "../../../../assets/svg/bookmark.svg";

export const SecondHeader = () => {
  const themes = ["home", "gaming", "movies", "music", "thoughts"];

  return (
    <StyledSecondHeader>
      <StyledLogo>logo</StyledLogo>
      <StyledThemesWrapper>
        <StyledThemes>
          {themes.map((theme, index) => (
            <StyledTheme>
              {theme}
              {index !== themes.length - 1 && (
                <StyledThemeMore>⋮</StyledThemeMore>
              )}
            </StyledTheme>
          ))}
        </StyledThemes>
      </StyledThemesWrapper>
      <StyledFunctions>
        <img src={bolt} />
        <img src={search} />
        <img src={share} />
        <img src={bookmark} />
      </StyledFunctions>
    </StyledSecondHeader>
  );
};

export default SecondHeader;
