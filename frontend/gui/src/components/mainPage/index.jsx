import React, { useState } from "react";
import Header from "./Header/index";
import ArticleSlider from "./ArticleSlider/index";

export const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <ArticleSlider />
    </React.Fragment>
  );
};

export default Main;
