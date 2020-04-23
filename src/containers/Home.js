import React from "react";
import Layout from "../components/Layout";
import Typical from "react-typical";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className="header-container">
        <div className="header-wrapper">
          <p className="header-title">
            Hi,
            <br /> Im <span className="name">Dennis Rivera</span> 🤙🏽
            <br />I am a{" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Software Developer 💻",
                1000,
                "USMC Veteran 🇺🇸",
                1000,
                "Husband 💍",
                1000,
                "Gymrat 💪🏽",
                1000,
              ]}
            />
          </p>
        </div>
        <div className="header-button-container">
          <Link to="/about">
            <button className="info-button">Get to Know Me</button>
          </Link>

          <Link to="/portfolio">
            <button className="info-button">Check Out My Work</button>
          </Link>
        </div>
        <div className="coding-image">
          <i class="fas fa-code"></i>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
