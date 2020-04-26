import React from "react";
import {
  StyledFirstHeader,
  StyledLinks,
  StyledSocials,
  StyledSocialIcon,
  StyledLoginButton,
  StyledVerticalLine,
  StyledCurrentDay,
  StyledMonthAndDate,
  StyledCurrentMonth,
  StyledCurrentYear,
} from "./styles";
import "./styles.css";
import facebook from "../../../../assets/svg/social/facebook.svg";
import twitter from "../../../../assets/svg/social/twitter.svg";
import instagram from "../../../../assets/svg/social/instagram.svg";
import vk from "../../../../assets/svg/social/vk.svg";
import pinterest from "../../../../assets/svg/social/pinterest.svg";
import { Link } from "react-router-dom";
import moment from "moment";

export const FirstHeader = () => {
  return (
    <StyledFirstHeader>
      <StyledLinks>
        <Link to="/">About</Link>
        <Link to="/">Contacts</Link>
        <Link to="/">Advertise</Link>
        <Link to="/">Options</Link>
      </StyledLinks>
      <StyledSocials>
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
        <a href="#">
          <StyledSocialIcon src={pinterest} />
        </a>
      </StyledSocials>
      <Link to="/">
        <StyledLoginButton>Login</StyledLoginButton>
      </Link>
      <StyledVerticalLine />
      <StyledCurrentDay>{moment().format("DD")}</StyledCurrentDay>
      <StyledMonthAndDate>
        <StyledCurrentMonth>{moment().format("MMM")}</StyledCurrentMonth>
        <StyledCurrentYear>{moment().format("YYYY")}</StyledCurrentYear>
      </StyledMonthAndDate>
    </StyledFirstHeader>
  );
};

export default FirstHeader;
