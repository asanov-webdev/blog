import styled from "styled-components";

export const StyledFirstHeader = styled.div`
  height: 50px;
  width: 100%;
  background: #2b2b28;
  display: flex;
  align-items: center;
`;

export const StyledLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 500px;
  margin-left: 100px;
  font-family: "Montserrat", sans-serif;

  a {
    text-decoration: none;
    color: white;
    transition: 0.3s color ease-in-out;
  }

  a:hover {
    color: #b1b1a4;
  }
`;

export const StyledSocials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 200px;
  margin-left: 690px;
`;

export const StyledSocialIcon = styled.img`
  width: 24px;
  filter: invert(100%);
  transition: 0.3s filter ease-in-out;

  &:hover {
    filter: invert(69.5%);
  }
`;

export const StyledLoginButton = styled.button`
  width: 100px;
  height: 30px;
  border: 2px solid white;
  border-radius: 25px;
  background: #2b2b28;
  color: white;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  margin-left: 100px;
  transition: 0.3s all ease-in-out;

  &:hover {
    color: #b1b1a4;
    cursor: pointer;
    border: 2px solid #b1b1a4;
  }
`;

export const StyledVerticalLine = styled.div`
  width: 2px;
  height: 35px;
  background-color: white;
  opacity: 0.8;
  margin-left: 30px;
`;

export const StyledCurrentDay = styled.p`
  color: white;
  font-size: 30px;
  margin-left: 30px;
  font-family: "Montserrat", sans-serif;
  cursor: default;
`;

export const StyledMonthAndDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  height: 50px;
  font-family: "Montserrat", sans-serif;
`;

export const StyledCurrentMonth = styled.p`
  color: white;
  text-transform: uppercase;
  font-size: 15px;
  cursor: default;
`;

export const StyledCurrentYear = styled.p`
  color: white;
  font-size: 12px;
  cursor: default;
`;
