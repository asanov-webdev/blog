import React from "react";
import { FirstHeader } from "./FirstHeader/FirstHeader";
import { SecondHeader } from "./SecondHeader/SecondHeader";

export const Header = (props) => {
  return (
    <React.Fragment>
      <FirstHeader />
      <SecondHeader callback={props.callback} />
    </React.Fragment>
  );
};

export default Header;
