import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const ContactForm = styled.div`
  margin: 8rem 5rem;
`;

const ContactFormTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  background-color: #468499;
  font-size: 50px;
  text-align: center;
  margin: 50px;
  display: inline-block;
`;

const ContactDescription = styled.p`
  font-family: "Roboto", sans-serif;
  color: #575757;
  font-size: 30px;
`;

const EmailLink = styled.a`
  text-decoration: underline;
  color: #468499;
`;

const Contact = () => {
  return (
    <Layout title="Contact Me" description="Lets Get in Touch">
      <ContactForm style={{ textAlign: "center" }}>
        <ContactFormTitle>Get In Touch</ContactFormTitle>
        <ContactDescription>
          If you want to talk or have any questions please reach out at <br />
          <span className="email">
            <EmailLink href="mailto:rivd19@outlook.com">
              rivd19@outlook.com{" "}
            </EmailLink>
          </span>
        </ContactDescription>
      </ContactForm>
    </Layout>
  );
};
export default Contact;
