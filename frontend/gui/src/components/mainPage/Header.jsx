import React, { useState } from "react";
import "./styles.css";
import {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderFunctions,
  StyledHeaderSearchInput,
  StyledHeaderAuthenticateIcon,
  StyledSearchIcon,
  StyledHeaderSearch
} from "./styles";
import search_icon from "../../assets/svg/15search.svg";
import authenticate_icon from "../../assets/svg/2authenticate.svg";
import { Link } from "react-router-dom";

export const Header = props => {
  const [searchValue, setSearchValue] = useState();

  return (
    <StyledHeader>
      <StyledHeaderLogo>
        <Link to="/">Бложик</Link>
      </StyledHeaderLogo>
      <StyledHeaderFunctions>
        <StyledHeaderSearch>
          <StyledHeaderSearchInput
            placeholder="поиск"
            value={searchValue}
            onChange={event => {
              setSearchValue(event.target.value);
            }}
          />
          <StyledSearchIcon
            src={search_icon}
            onClick={() => props.callback(searchValue)}
          />
        </StyledHeaderSearch>
        <StyledHeaderAuthenticateIcon src={authenticate_icon} />
      </StyledHeaderFunctions>
    </StyledHeader>
  );
};

export default Header;
