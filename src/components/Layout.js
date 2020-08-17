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
          changeStyle={props.changeStyle}
          animation={props.animation}
          slideIn={props.slideIn}
        />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
