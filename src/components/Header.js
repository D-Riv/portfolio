import React from "react";
import Navbar from "./navbar";
import styled from "styled-components";

const HeaderWrapper = styled.header`
font-family: "Roboto", sans-serif;
display: flex:
flex-direction: row;
align-items: center;
background-color: #272727;
padding: 4rem 6rem .5rem 6rem;
`;

const HeaderTitle = styled.h1`
  color: #468499;
  font-size: 2.5rem;
  font-weight: 500;
`;

const TitleDescription = styled.h3`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Header = (props) => {
  return (
    <div>
      <Navbar />
      <HeaderWrapper>
        <HeaderTitle>{props.title}</HeaderTitle>
        <TitleDescription>{props.description}</TitleDescription>
      </HeaderWrapper>
    </div>
  );
};
export default Header;
