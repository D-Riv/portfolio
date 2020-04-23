import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import "../styles/styles.css";
import styled from "styled-components";

const LayoutContainer = styled.div`
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
      <LayoutContent style={props.styles}>
        <Header title={props.title} description={props.description} />
        {props.children}
      </LayoutContent>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
