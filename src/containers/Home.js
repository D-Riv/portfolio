import React, { useState } from "react";

import Layout from "../components/Layout";
import Resume from "../utils/Dennis_Rivera.pdf";
import Headshot from "../utils/IMG_3208.png";
import Portfolio from "../containers/Portfolio";
import { Link } from "react-router-dom";

const Home = () => {
  const [animation, setTransition] = useState("none");
  const [animationTwo, setTransitionTwo] = useState("none");
  const [aboutActive, setActive] = useState("active");
  const [portfolioActive, setPortfolioActive] = useState("not-active");

  const slideInAnimation = () => {
    if (portfolioActive == "not-active") {
      setTransitionTwo("slideOut 2s forwards");
      setTransition("slideIn 2s forwards");
      setActive("not-active");
      setPortfolioActive("active");
    }
    // if (animation == "none") {
    //   setTransitionTwo("slideOut 2s forwards");
    //   setTransition("slideIn 2s forwards");
    // } else if (
    //   animation == "slideIn 2s forwards" &&
    //   animationTwo == "slideOut 2s forwards"
    // ) {
    //   setTransition("slideBackOut 2s forwards");

    //   setTransitionTwo("slideBackIn 2s forwards");
    // } else {
    //   setTransitionTwo("slideOut 2s forwards");
    //   setTransition("slideIn 2s forwards");
    // }
  };

  const slideAboutOut = () => {
    if (aboutActive == "not-active") {
      setTransition("slideBackOut 2s forwards");
      setTransitionTwo("slideBackIn 2s forwards");
      setPortfolioActive("not-active");
      setActive("active");
    }
  };

  return (
    <Layout
      slideIn={slideInAnimation}
      active={aboutActive}
      activeTwo={portfolioActive}
      slideAboutOut={slideAboutOut}
    >
      <div className="code-image">
        <i class="fas fa-code"></i>
      </div>
      <div className="intro-container">
        <p>
          <span className="name">DENNIS RIVERA</span>
          <br />
          <span className="job-title">Software Engineer</span>
          <br />
          <br />
          <span className="description">
            I love to build things with clean, efficient, and scalable code.
          </span>
        </p>
        <div>
          <ul className="icon-links">
            <li className="icon">
              <a href="https://github.com/D-Riv" target="_blank">
                <i class="fab fa-github-square scaled"></i>
                <span className="icon-name">Github</span>
              </a>
            </li>
            <li className="icon">
              <a
                href="https://www.linkedin.com/in/dennis-rivera/"
                target="_blank"
              >
                <i class="fab fa-linkedin scaled"></i>
                <span className="icon-name">LinkedIn</span>
              </a>
            </li>
            <li className="icon">
              <a a href="mailto: rivd19@outlook.com">
                <i class="fas fa-envelope-square scaled"></i>
                <span className="icon-name">Email</span>
              </a>
            </li>
            <li className="icon">
              <a href={Resume} target="_blank">
                <i class="fas fa-file scaled"></i>
                <span className="icon-name">Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="about-wrapper">
        <div className="about-container" style={{ animation: animationTwo }}>
          <div className="about-main">
            <div className="image-container">
              <img src={Headshot} alt="Headshot photo of Dennis Rivera" />
              <p>USMC Veteran</p>
            </div>
            <div className="about-bio">
              <h1 className="about-me">About Me</h1>

              <p className="about-description">
                I am a passionate, purpose-driven Software Engineer with a
                military background in Logistics and Embarkation. My unique
                experience allows me to tackle different problems strategically
                and with an analytical mindset. I thrive in collaborative
                environments with like-minded individuals who want to
                continuously learn and grow there skillset.
                <br />
                <br /> When I'm not coding I love to workout, go on hikes with
                my wife, or take my dogs out on a crazy adventure.
              </p>
              <h1 className="about-me">Skills</h1>
              <p>
                <span>Languages:</span> HTML5, CSS3/Sass, JavaScript, Python,
                Java
              </p>
              <p>
                <span>Frameworks/Libraries:</span> Bootstrap, React, Node.js,
                Express
              </p>
              <p>
                <span>Databases:</span> MongoDB, PostgreSQL
              </p>
              <p>
                <span>Other Skills:</span> Rest API, Git, Github, Agile, Heroku,
                Netlify
              </p>
            </div>
          </div>
        </div>
      </div>
      <Portfolio animationActive={animation} />
    </Layout>
  );
};
export default Home;
