import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const AboutSummaryContainer = styled.div`
  margin: 100px 150px 100px 150px;
`;

const AboutSummary = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #575757;
`;

const Skills = styled.div`
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin: 20px;
`;

const SkillsTitle = styled.span`
  font-size: 2.1rem;
  font-weight: 500;
`;

const SkillsTitle2 = styled.span`
  color: #ffffff;
  background-color: #468499;
  padding: 0 1rem;
`;

const SkillList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;
  list-style: none;
`;

const SkillListItem = styled.li`
  font-size: 3rem;
`;

const SkillListItemCustom = styled.li`
  font-size: 1.5rem;
  font-family: "Raleway", sans-serif;
  color: #a3a3a3;
  padding-top: 10px;
`;

const SkillListItemCustom2 = styled.li`
  font-size: 1.5rem;
`;

const About = () => {
  return (
    <Layout title="About Me" description="Learn About Who I Am">
      <div className="about-main-wrapper">
        <AboutSummaryContainer>
          <AboutSummary>
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
          </AboutSummary>
        </AboutSummaryContainer>
        <Skills>
          <SkillsTitle>
            My Current <SkillsTitle2>Languages, Frameworks,</SkillsTitle2> and{" "}
            <SkillsTitle2>Libraries</SkillsTitle2>
          </SkillsTitle>
          <SkillList>
            <SkillListItem>
              <i class="fab fa-html5"></i>
            </SkillListItem>
            <SkillListItem>
              <i class="fab fa-css3-alt"></i>
            </SkillListItem>
            <SkillListItem>
              <i class="fab fa-js"></i>
            </SkillListItem>
            <SkillListItem>
              <i class="fab fa-react"></i>
            </SkillListItem>
            <SkillListItem>
              <i class="fab fa-node"></i>
            </SkillListItem>
            <SkillListItem>
              {/* <img
                className="mongodb-logo"
                src={MongoDB}
                alt="mongodb-logo"
                width="100"
                height="50"
              /> */}
            </SkillListItem>
            <SkillListItemCustom>
              <p className="express">Express</p>
            </SkillListItemCustom>
            <SkillListItem>
              <i class="fab fa-python"></i>
            </SkillListItem>
            <SkillListItemCustom2>
              <p className="django">Django</p>
            </SkillListItemCustom2>
            <SkillListItem>
              {/* <img
                className="postgresql-logo"
                src={Postgresql}
                alt="postgresql-logo"
                width="120"
                height="100"
              /> */}
            </SkillListItem>
          </SkillList>
        </Skills>
      </div>
    </Layout>
  );
};
export default About;
