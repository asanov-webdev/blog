import React from "react";
import { FirstHeader } from "./FirstHeader/FirstHeader";
import { SecondHeader } from "./SecondHeader/SecondHeader";

export const Header = () => {
  return (
    <React.Fragment>
      <FirstHeader />
      <SecondHeader />
    </React.Fragment>
  );
};

export default Header;
