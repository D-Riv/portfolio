import React from "react";
import Layout from "../components/Layout";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import styled from "styled-components";

// const StyledLayout = {
//   color: "#ffffff",
//   backgroundColor: "#272727",
//   fontFamily: "'Roboto', sans-serif",
// };

// const HomeContainer = styled.div`
//   position: sticky;
//   top: 21rem;
//   margin-left: 7rem;
// `;
// const TitleContainer = styled.p`
//   font-size: 50px;

//   @media (max-width: 500px) {
//     font-size: 20px;
//   }
// `;
// const ButtonContainer = styled.div`
//   position: sticky;
//   top: 35rem;
//   margin-left: 7rem;

//   @media (max-width: 500px) {
//     display: flex;
//   }
// `;
// const ButtonStyle = styled.button`
//   font-size: 20px;
//   color: #ffffff;
//   background-color: #468499;
//   border: none;
//   border-radius: 30px;
//   margin: 10px;
//   padding: 15px 20px;
//   cursor: pointer;
//   transition: transform 0.2s;

//   :focus {
//     outline: none;
//   }

//   @media (max-width: 500px) {
//     font-size: 10px;
//   }
// `;
// const BackgroundImage = styled.div`
//   position: absolute;
//   top: 10rem;
//   right: 10rem;

//   @media (max-width: 500px) {
//     right: 1.5rem;
//   }
// `;

const Home = () => {
  return (
    <Layout styles={StyledLayout}>
      <div>
        <i class="fas fa-code"></i>
      </div>
      <div>
        <p>
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
      <div>
        <Link to="/about">
          <button>Get to Know Me</button>
        </Link>

        <Link to="/portfolio">
          <button>Check Out My Work</button>
        </Link>
      </div>
    </Layout>
  );
};
export default Home;
