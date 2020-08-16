import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../scss/main.scss";

const Layout = (props) => {
  return (
    <div className="layout-container">
      <div className="layout-content" style={props.styles}>
        <Header title={props.title} description={props.description} />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
