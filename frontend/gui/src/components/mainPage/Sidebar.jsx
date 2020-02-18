import React, { useState } from "react";
import "./styles.css";
import { StyledSidebar, StyledSidebarElement, StyledThemeIcon } from "./styles";
import books from "../../assets/svg/4books.svg";
import movies from "../../assets/svg/12movies.svg";
import games from "../../assets/svg/9games.svg";
import music from "../../assets/svg/13music.svg";
import news from "../../assets/svg/14news.svg";

export const Sidebar = props => {
  const themes = [books, movies, games, music, news];

  return (
    <StyledSidebar>
      {themes.map((theme, index) => (
        <StyledSidebarElement
          key={index}
          index={index}
          onClick={() => props.callback(index)}
        >
          <StyledThemeIcon src={theme} />
        </StyledSidebarElement>
      ))}
    </StyledSidebar>
  );
};

export default Sidebar;
