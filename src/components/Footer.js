import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  margin: 0 5rem;
  max-height: 300px;
`;

const FooterContainer = styled.div`
  border-top: 1px solid #000000;
  text-align: center;
`;

const FooterUl = styled.ul`
  display: flex;
  justify-content: center;
`;

const FooterLi = styled.li`
  font-size: 30px;
  cursor: pointer;
  margin: 1px 20px;
  list-style: none;
  transition: transform 0.2s;

  :hover {
    transform: scale(1.3);
  }
`;

const FooterText = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 0.8rem;
  color: #575757;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterUl>
          <FooterLi className="footer-li">
            <a href="https://github.com/D-Riv" target="_blank">
              <i class="fab fa-github-square"></i>
            </a>
          </FooterLi>
          <FooterLi className="footer-li">
            <a
              href="https://www.linkedin.com/in/dennis-rivera/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </FooterLi>
        </FooterUl>

        <FooterText>
          Copyright <i class="far fa-copyright"></i> 2020, Dennis
        </FooterText>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
