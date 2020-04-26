import React from "react";
import { FirstHeader } from "./FirstHeader/FirstHeader";
import { SecondHeader } from "./SecondHeader/SecondHeader";
import { HeaderProps } from "../../../shared/types";

export const Header = (props: HeaderProps) => {
  return (
    <React.Fragment>
      <FirstHeader />
      <SecondHeader callback={props.callback} />
    </React.Fragment>
  );
};

export default Header;
