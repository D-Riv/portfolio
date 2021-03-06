import React from "react";
import Navbar from "./Navbar";

import Header from "./Header";
import Footer from "./Footer";
import "../scss/main.scss";

const Layout = (props) => {
  return (
    <div className="layout-container">
      <div className="layout-content" style={props.styles}>
        <Navbar
          slideIn={props.slideIn}
          active={props.active}
          activeTwo={props.activeTwo}
          slideAboutOut={props.slideAboutOut}
        />
        <div className="children-container">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
