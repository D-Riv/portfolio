import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

// const AboutSummaryWrapper = styled.div`
//   margin-top: 8rem;
// `;

// const AboutSummaryContainer = styled.div`
//   margin: 100px 170px 100px 170px;
// `;

// const AboutSummary = styled.p`
//   font-family: "Montserrat", sans-serif;
//   color: #575757;
// `;

// const Skills = styled.div`
//   font-family: "Roboto", sans-serif;
//   text-align: center;
//   margin: 20px;
// `;

// const SkillsTitle = styled.span`
//   font-size: 2.1rem;
//   font-weight: 500;
// `;

// const SkillsTitle2 = styled.span`
//   color: #ffffff;
//   background-color: #468499;
//   padding: 0 1rem;
// `;

// const SkillList = styled.ul`
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   margin: 10px;
//   list-style: none;
// `;

// const li = styled.li`
//   font-size: 3rem;
//   display: flex;
//   flex-direction: column;
// `;

// const h3 = styled.h3`
//   font-family: "Roboto", sans-serif;
//   font-size: 0.8rem;
//   margin: 1rem 0;
//   color: #575757;
// `;

// const liImage = styled.li`
//   // padding-top: 1rem;
// `;

// const liCustom = styled.li`
//   font-size: 1.5rem;
//   font-family: "Raleway", sans-serif;
//   color: #a3a3a3;
//   padding: 10px 0;
// `;

// const liCustom2 = styled.li`
//   font-size: 1.5rem;
//   color: #ffffff;
//   background-color: #004f11;
//   border-radius: 10px;
//   margin-top: 5px;
//   padding: 5px;
// `;

const About = () => {
  return (
    <Layout title="About Me" description="Learn About Who I Am">
      <div>
        <div>
          <p>
            Hi, it's nice to meet you! I'm Dennis, I am a passionate,
            purpose-driven Software developer. I have a military background in
            the United States Marine Corps where I served for 4-year as a
            Logistics Specialist. During my service, I spent a lot of my time
            traveling and exploring the world although I met so many amazing
            people and learned so much I knew I wanted to more in life. While
            trying to figure out life after the military I decided I would
            enroll in a coding boot camp called General Assembly in Washington
            DC, where I spent the next 3 months learning to code and pushing my
            self mentally, more than I ever have. Throughout these 3 months, I
            learned that I loved to solve problems and challenge myself to find
            solutions, not only that but I picked up a multitude of different
            technologies that have allowed me to build websites, web apps, or
            even just a simple feature. I never would have thought that this
            could be possible, or that I would have fallen in love with coding.
            Following this path has changed my life forever and it's crazy to
            think that this is just the beginning. I have truly found my passion
            and something I see myself doing for the rest of my life, there is
            no better feeling then being able to create and watch your ideas
            come to life. I will continue to push myself to learn more and be
            more.
          </p>
        </div>
        <div>
          <span>
            My Current <span>Languages, Frameworks,</span> and{" "}
            <span>Libraries</span>
          </span>
          <ul>
            <li>
              <i class="fab fa-html5"></i>
              <div>
                <h3>HTML5</h3>
              </div>
            </li>
            <li>
              <i class="fab fa-css3-alt"></i>
              <div>
                <h3>CSS3</h3>
              </div>
            </li>
            <li>
              <i class="fab fa-js"></i>
              <div>
                <h3>JavaScript</h3>
              </div>
            </li>
            <li>
              <i class="fab fa-react"></i>
              <div>
                <h3>React</h3>
              </div>
            </li>
            <li>
              <i class="fab fa-node"></i>
              <div>
                <h3>NodeJS</h3>
              </div>
            </li>
            <li>
              <img
                src="https://i.imgur.com/cR1JtfH.jpg"
                title="source: imgur.com"
                width="100"
                height="50"
              />
              <div>
                <h3>MongoDB</h3>
              </div>
            </li>
            <li>
              <li>Express</li>
              <div>
                <h3>Express</h3>
              </div>
            </li>
            <li>
              <i class="fab fa-python"></i>
              <div>
                <h3>Python</h3>
              </div>
            </li>
            <li>
              <li>Django</li>
              <div>
                <h3>Django</h3>
              </div>
            </li>
            <li>
              <img
                className="postgresql-logo"
                src="https://i.imgur.com/VjFXXFu.jpg"
                alt="postgresql-logo"
                width="120"
                height="50"
              />
              <div>
                <h3>PostgreSQL</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};
export default About;
