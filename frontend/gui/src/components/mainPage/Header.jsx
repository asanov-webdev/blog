import React from "react";
import { FirstHeader } from "./Header/FirstHeader/FirstHeader";
import { SecondHeader } from "./Header/SecondHeader/SecondHeader";

export const Header = () => {
  return (
    <React.Fragment>
      <FirstHeader />
      <SecondHeader />
    </React.Fragment>
  );
};

export default Header;
