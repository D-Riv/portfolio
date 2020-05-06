import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const ProjectTitleContainer = styled.div`
  text-align: center;
`;

const ProjectTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  background-color: #468499;
  font-size: 30px;
  // font-weight: 5rem;
  text-align: center;
  margin: 50px;
  display: inline-block;
`;

const Projects = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 20px 100px 100px 100px;
`;

const ProjectImage = styled.img`
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

const ProjectDescription = styled.p`
  color: #575757;
  width: 500px;
  text-align: left;
  margin: 0 50px 0 50px;
`;

const ProjectSkills = styled.p`
  color: #468499;
  font-weight: bold;
  padding: 10px;
`;

const ButtonContainer = styled.p`
  margin: 10px;
`;

const ButtonLinks = styled.button`
  font-size: 15px;
  color: #ffffff;
  background-color: #468499;
  border: none;
  border-radius: 30px;
  margin: 10px;
  padding: 15px 20px;
  cursor: pointer;
  transition: transform 0.2s;

  :focus {
    outline: none;
  }

  :hover {
    transform: scale(1.1);
  }
`;

const Portfolio = () => {
  return (
    <Layout title="Portfolio" description="Check Out Some of My Work">
      <div className="portfolio-main-wrapper">
        <div className="portfolio-main-container">
          <ProjectTitleContainer>
            <ProjectTitle>Tv-Movie Library</ProjectTitle>
          </ProjectTitleContainer>
          <Projects>
            <ProjectImage
              className="portfolio-images"
              src="https://i.imgur.com/0w0ViUU.png"
              alt="design of a portfolio"
              width="500"
              height="250"
            />
            <div className="project-display">
              <ProjectDescription>
                This is a movie and tv show library built with React. The data
                is fetched from the Tv-Movie API I built in the back end. Repo
                for my api can be found below. Within the library you have the
                ability to search for a movie or show of your choosing to view
                and get information of that particular movie or show. If you
                dont see one you like in the library you have the ability to
                add, edit, or delete a movie or show from the database as well.
                Overall the library contains full CRUD utilizing fetch request
                to reach different endpoints. This was an exciting yet
                challenging project to build.
              </ProjectDescription>
              <ProjectSkills>
                HTML | CSS | JavaScript | React | Styled Components | BootStrap
              </ProjectSkills>
              <ButtonContainer>
                <a href="https://tv-movie-library.netlify.app/" target="_blank">
                  <ButtonLinks>
                    <i class="fas fa-link"></i> VISIT
                  </ButtonLinks>
                </a>
                <a
                  href="https://github.com/D-Riv/Project-1-Portfolio"
                  target="_blank"
                >
                  <ButtonLinks>
                    <i class="fab fa-github"></i> SOURCE
                  </ButtonLinks>
                </a>
              </ButtonContainer>
            </div>
          </Projects>

          <ProjectTitleContainer>
            <ProjectTitle>Hero Database</ProjectTitle>
          </ProjectTitleContainer>
          <Projects>
            <div className="project-display">
              <ProjectDescription>
                A simple super hero database that contains Marvel and DC
                character data. This web app utilizes the modal ui pattern for
                displaying super hero images and bio through JavaScript DOM
                manipulation. The api utlized for this project is the SuperHero
                api.
              </ProjectDescription>
              <ProjectSkills>HTML | CSS | JavaScript</ProjectSkills>
              <ButtonContainer>
                <a
                  href="https://ui-pattern-project.netlify.com/"
                  target="_blank"
                >
                  <ButtonLinks>
                    <i class="fas fa-link"></i> VISIT
                  </ButtonLinks>
                </a>
                <a
                  href="https://github.com/D-Riv/Project-3-UI-Pattern"
                  target="_blank"
                >
                  <ButtonLinks>
                    <i class="fab fa-github"></i> SOURCE
                  </ButtonLinks>
                </a>
              </ButtonContainer>
            </div>
            <ProjectImage
              className="hero-image"
              src="https://i.imgur.com/YiTt3Xd.png"
              alt="Hero database"
              width="500"
              height="250"
            />
          </Projects>
          <ProjectTitleContainer>
            <ProjectTitle>Hangman</ProjectTitle>
          </ProjectTitleContainer>
          <Projects>
            <ProjectImage
              className="portfolio-images"
              src="https://i.imgur.com/k25AaPC.png"
              alt="hangman game"
              width="500"
              height="250"
            />
            <div className="project-display">
              <ProjectDescription>
                This is a project built from everything we have learned in unit
                1 during my time at GA. A fully functional Hangman game that can
                be played alone or with friends for entertainment. The game was
                developed utilizing semantic markup, CSS animations/responsive
                design, and DOM minipulation. The game is built around the
                famously known game hangman.
              </ProjectDescription>
              <ProjectSkills>HTML | CSS | JavaScript</ProjectSkills>
              <ButtonContainer>
                <a
                  href="https://project-4-hangman.netlify.com/"
                  target="_blank"
                >
                  <ButtonLinks>
                    <i class="fas fa-link"></i> VISIT
                  </ButtonLinks>
                </a>
                <a
                  href="https://github.com/D-Riv/Project-4-Hangman"
                  target="_blank"
                >
                  <ButtonLinks>
                    <i class="fab fa-github"></i> SOURCE
                  </ButtonLinks>
                </a>
              </ButtonContainer>
            </div>
          </Projects>
          <ProjectTitleContainer>
            <ProjectTitle>Tv-Movie API</ProjectTitle>
          </ProjectTitleContainer>
          <Projects>
            <div className="project-display">
              <ProjectDescription>
                Designed a JSON API containing data on movies and tv shows. The
                API contains complete CRUD functionality implemented with
                RESTful routes.
              </ProjectDescription>
              <ProjectSkills>Node.JS | MongoDB | Express</ProjectSkills>
              <ButtonContainer>
                <a href="https://tv-movie-api.herokuapp.com/" target="_blank">
                  <ButtonLinks>
                    <i class="fas fa-link"></i> VISIT
                  </ButtonLinks>
                </a>
                <a href="https://github.com/D-Riv/tv-movie-api" target="_blank">
                  <ButtonLinks>
                    <i class="fab fa-github"></i> SOURCE
                  </ButtonLinks>
                </a>
              </ButtonContainer>
            </div>
            <ProjectImage
              className="portfolio-images"
              src="https://i.imgur.com/9sxSFtl.png"
              alt="my portfolio"
              width="500"
              height="250"
            />
          </Projects>

          <ProjectTitleContainer>
            <ProjectTitle>Mockup</ProjectTitle>
          </ProjectTitleContainer>
          <Projects>
            <ProjectImage
              className="portfolio-images"
              src="https://i.imgur.com/h1amchM.png"
              alt="design of a portfolio"
              width="500"
              height="250"
            />
            <div className="project-display">
              <ProjectDescription>
                This is a static web page project used to demonstrate my ability
                to structure and design a web page based on a mock up provided
                to me. This allowed me to emulate what is done on the job,
                working with designers. The project is built around a personal
                portfolio.
              </ProjectDescription>
              <ProjectSkills>HTML | CSS </ProjectSkills>
              <ButtonContainer>
                <a
                  href="https://project-1-portfolio.netlify.com/"
                  target="_blank"
                >
                  <ButtonLinks>
                    <i class="fas fa-link"></i> VISIT
                  </ButtonLinks>
                </a>
                <a
                  href="https://github.com/D-Riv/Project-1-Portfolio"
                  target="_blank"
                >
                  <ButtonLinks>
                    <i class="fab fa-github"></i> SOURCE
                  </ButtonLinks>
                </a>
              </ButtonContainer>
            </div>
          </Projects>
        </div>
      </div>
    </Layout>
  );
};
export default Portfolio;
