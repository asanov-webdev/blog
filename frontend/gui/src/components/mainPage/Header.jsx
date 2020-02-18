import React, { useState } from "react";
import "./styles.css";
import {
  StyledHeaderFirst,
  StyledHeaderSecond,
  StyledHeaderFirstLinks,
  StyledHeaderFirstSocials,
  StyledSocialIcon,
  StyledHeaderFirstLoginButton,
  StyledHeaderFirstVerticalLine,
  StyledHeaderFirstCurrentDay,
  StyledHeaderFirstMonthAndDate,
  StyledHeaderFirstCurrentMonth,
  StyledHeaderFirstCurrentYear,
  StyledHeaderSecondThemesWrapper,
  StyledHeaderSecondThemes,
  StyledHeaderSecondTheme,
  StyledHeaderSecondThemeMore,
  StyledHeaderSecondLogo,
  StyledHeaderSecondFunctions
} from "./styles";
import facebook from "../../assets/svg/social/facebook.svg";
import twitter from "../../assets/svg/social/twitter.svg";
import instagram from "../../assets/svg/social/instagram.svg";
import vk from "../../assets/svg/social/vk.svg";
import more from "../../assets/svg/more.svg";
import bookmark from "../../assets/svg/bookmark.svg";
import search from "../../assets/svg/search.svg";
import share from "../../assets/svg/share.svg";
import moment from "moment";
import { Link } from "react-router-dom";

export const Header = props => {
  const [searchValue, setSearchValue] = useState();

  const themes = ["home", "gaming", "movies", "music", "thoughts"];

  return (
    <React.Fragment>
      <StyledHeaderFirst>
        <StyledHeaderFirstLinks>
          <Link to="/">About</Link>
          <Link to="/">Contacts</Link>
          <Link to="/">Advertise</Link>
          <Link to="/">Options</Link>
        </StyledHeaderFirstLinks>
        <StyledHeaderFirstSocials>
          <a href="#">
            <StyledSocialIcon src={facebook} />
          </a>
          <a href="#">
            <StyledSocialIcon src={twitter} />
          </a>
          <a href="#">
            <StyledSocialIcon src={instagram} />
          </a>
          <a href="#">
            <StyledSocialIcon src={vk} />
          </a>
        </StyledHeaderFirstSocials>
        <Link to="/">
          <StyledHeaderFirstLoginButton>Login</StyledHeaderFirstLoginButton>
        </Link>
        <StyledHeaderFirstVerticalLine />
        <StyledHeaderFirstCurrentDay>
          {moment().format("DD")}
        </StyledHeaderFirstCurrentDay>
        <StyledHeaderFirstMonthAndDate>
          <StyledHeaderFirstCurrentMonth>
            {moment().format("MMM")}
          </StyledHeaderFirstCurrentMonth>
          <StyledHeaderFirstCurrentYear>
            {moment().format("YYYY")}
          </StyledHeaderFirstCurrentYear>
        </StyledHeaderFirstMonthAndDate>
      </StyledHeaderFirst>
      <StyledHeaderSecond>
        <StyledHeaderSecondLogo>logo</StyledHeaderSecondLogo>
        <StyledHeaderSecondThemesWrapper>
          <StyledHeaderSecondThemes>
            {themes.map((theme, index) => (
              <StyledHeaderSecondTheme>
                {theme}
                {index !== themes.length - 1 && (
                  <StyledHeaderSecondThemeMore src={more} />
                )}
              </StyledHeaderSecondTheme>
            ))}
          </StyledHeaderSecondThemes>
        </StyledHeaderSecondThemesWrapper>
        <StyledHeaderSecondFunctions>
          <img src={search} />
          <img src={share} />
          <img src={bookmark} />
        </StyledHeaderSecondFunctions>
      </StyledHeaderSecond>
    </React.Fragment>
  );
};

export default Header;
