import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="About Me" description="Learn About Who I Am">
      <div className="about-main-wrapper">
        <div className="about-summary-container">
          <p className="aboutme">
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
        <div className="skills">
          <h1>
            My Current{" "}
            <span className="skills-title">Languages, Frameworks,</span> and{" "}
            <span className="skills-title">Libraries</span>
          </h1>
          <ul className="skill-list">
            <li>
              <i class="fab fa-html5"></i>
            </li>
            <li>
              <i class="fab fa-css3-alt"></i>
            </li>
            <li>
              <i class="fab fa-js"></i>
            </li>
            <li>
              <i class="fab fa-react"></i>
            </li>
            <li>
              <i class="fab fa-node"></i>
            </li>
            <li>
              {/* <img
                className="mongodb-logo"
                src={MongoDB}
                alt="mongodb-logo"
                width="100"
                height="50"
              /> */}
            </li>
            <li>
              <p className="express">Express</p>
            </li>
            <li>
              <i class="fab fa-python"></i>
            </li>
            <li>
              <p className="django">Django</p>
            </li>
            <li>
              {/* <img
                className="postgresql-logo"
                src={Postgresql}
                alt="postgresql-logo"
                width="120"
                height="100"
              /> */}
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};
export default About;
