import React, { useState } from "react";

import "../scss/portfolio.scss";

const Portfolio = (props) => {
  return (
    <div
      className="portfolio-main-wrapper"
      style={{ animation: props.animationActive }}
    >
      <div className="portfolio-main-container">
        <div className="project-container">
          <img
            className="portfolio-images"
            src="https://i.imgur.com/0w0ViUU.png"
            alt="design of a portfolio"
            width="270"
            height="200"
          />

          <div className="project-display">
            <div className="title-container">
              <h1>Tv-Movie Library</h1>
            </div>
            <p className="project-description">
              A full stack application that stores a public library of movies
              and tv shows.
            </p>
            <div className="project-skills">
              HTML | CSS | JavaScript | React | Styled Components | BootStrap
            </div>
            <p className="project-buttons">
              <a href="https://tv-movie-library.netlify.app/" target="_blank">
                <button>
                  <i class="fas fa-link"></i> VISIT
                </button>
              </a>
              <a
                href="https://github.com/D-Riv/tv-movie-library"
                target="_blank"
              >
                <button>
                  <i class="fab fa-github"></i> SOURCE
                </button>
              </a>
            </p>
          </div>
        </div>

        <div className="project-container">
          <img
            className="hero-image"
            src="https://i.imgur.com/YiTt3Xd.png"
            alt="Hero database"
            width="270"
            height="200"
          />
          <div className="project-display">
            <div className="title-container">
              <h1>Hero Database</h1>
            </div>
            <p className="project-description">
              A super hero database that contains Marvel and DC character data
              pulled from the SuperHero API.
            </p>
            <div className="project-skills">HTML | CSS | JavaScript</div>
            <p className="project-buttons">
              <a href="https://ui-pattern-project.netlify.com/" target="_blank">
                <button>
                  <i class="fas fa-link"></i> VISIT
                </button>
              </a>
              <a
                href="https://github.com/D-Riv/Project-3-UI-Pattern"
                target="_blank"
              >
                <button>
                  <i class="fab fa-github"></i> SOURCE
                </button>
              </a>
            </p>
          </div>
        </div>

        <div className="project-container">
          <img
            className="portfolio-images"
            src="https://i.imgur.com/k25AaPC.png"
            alt="hangman game"
            width="270"
            height="200"
          />
          <div className="project-display">
            <div className="title-container">
              <h1>Hangman</h1>
            </div>
            <p className="project-description">
              A fully functional Hangman game remake, based on the beloved
              classic.
            </p>
            <div className="project-skills">HTML | CSS | JavaScript</div>
            <p className="project-buttons">
              <a href="https://project-4-hangman.netlify.com/" target="_blank">
                <button>
                  <i class="fas fa-link"></i> VISIT
                </button>
              </a>
              <a
                href="https://github.com/D-Riv/Project-4-Hangman"
                target="_blank"
              >
                <button>
                  <i class="fab fa-github"></i> SOURCE
                </button>
              </a>
            </p>
          </div>
        </div>

        <div className="project-container">
          <img
            className="portfolio-images"
            src="https://i.imgur.com/9sxSFtl.png"
            alt="my portfolio"
            width="270"
            height="200"
          />
          <div className="project-display">
            <div className="title-container">
              <h1>Tv-Movie API</h1>
            </div>
            <p className="project-description">
              REST API containing tv and movie data with complete CRUD
              functionality implemented with RESTful routes.
            </p>
            <div className="project-skills">Node.JS | MongoDB | Express</div>
            <p className="project-buttons">
              <a href="https://tv-movie-api.herokuapp.com/" target="_blank">
                <button>
                  <i class="fas fa-link"></i> VISIT
                </button>
              </a>
              <a href="https://github.com/D-Riv/tv-movie-api" target="_blank">
                <button>
                  <i class="fab fa-github"></i> SOURCE
                </button>
              </a>
            </p>
          </div>
        </div>

        <div className="project-container">
          <img
            className="portfolio-images"
            src="https://i.imgur.com/h1amchM.png"
            alt="design of a portfolio"
            width="270"
            height="200"
          />
          <div className="project-display">
            <div className="title-container">
              <h1>Mockup</h1>
            </div>
            <p className="project-description">
              Static web page structured and designed on a mock up design.
            </p>
            <div className="project-skills">HTML | CSS </div>
            <p className="project-buttons">
              <a
                href="https://project-1-portfolio.netlify.com/"
                target="_blank"
              >
                <button>
                  <i class="fas fa-link"></i> VISIT
                </button>
              </a>
              <a
                href="https://github.com/D-Riv/Project-1-Portfolio"
                target="_blank"
              >
                <button>
                  <i class="fab fa-github"></i> SOURCE
                </button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
