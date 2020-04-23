import React from "react";
import Header from "./Header";
// import Footer from "./footer";
// import "../styles/styles.css";
import styled from "styled-components";

const LayoutContainer = styled.div`
  // margin: 0 auto;
  // max-width: 100rem;
  // padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const LayoutContent = styled.div`
  flex-grow: 1;
`;

const Layout = (props) => {
  return (
    <LayoutContainer>
      <link
        href="https:////use.fontawesome.com/releases/v5.12.1/css/all.css"
        rel="stylesheet"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      ></link>
      <LayoutContent>
        <Header title={props.title} description={props.description} />
        {props.children}
      </LayoutContent>
      {/* <Footer /> */}
    </LayoutContainer>
  );
};

export default Layout;
