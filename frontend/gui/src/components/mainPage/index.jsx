import React, { useState } from "react";
import Header from "./Header";

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
    </React.Fragment>
  );
};

export default Main;
