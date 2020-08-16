import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = (props) => {
  return (
    <div>
      <Navbar />
      <header>
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
      </header>
    </div>
  );
};
export default Header;
