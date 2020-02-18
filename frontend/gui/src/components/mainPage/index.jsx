import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ArticleList from "./ArticleList";
import { StyledMainContent } from "./styles";

export const Main = () => {
  const [searchValue, setSearchValue] = useState();
  const [sortingThemeIndex, setSortingThemeIndex] = useState("books");

  const searchCallback = searchValue => {
    setSearchValue(searchValue);
  };

  const themeCallback = sortingThemeIndex => {
    setSortingThemeIndex(sortingThemeIndex);
  };

  return (
    <React.Fragment>
      <Header callback={searchCallback} />
      <StyledMainContent>
        <Sidebar callback={themeCallback} />
        <ArticleList searchValue={searchValue} sortingThemeIndex={sortingThemeIndex} />
      </StyledMainContent>
    </React.Fragment>
  );
};

export default Main;
