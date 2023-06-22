import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import "../styles/style.scss";
import HomeVideo from "../components/video/HomeVideo";
import { useAuth0 } from "@auth0/auth0-react";
import TestPicture from "../images/TestPicture.png";

function Home() {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();
 
    const handleButtonClick = () => {
      // window.location.href = "/exam";
      if (isAuthenticated) {
        window.location.href = "/exam";
      } else {
        loginWithRedirect({
          redirectUri: window.location.origin + "/exam"
        });
    };
  };
  return (
    <section>
      <Container>
        <Container  className="home-content">
          <div className="home-header">
            <div>
            <h1 className="heading-name">
                Exam Genie
            </h1>
            </div>
              <div>
            <h3>
                Exam Genie is an AI question generator designed the way you want to create questions for your exams. Allowing you to generate different questions for your needs!
              </h3>
                <Type />
            </div>
          </div>
          <div className="home-right--empty">
          <HomeVideo />
          </div>
        </Container>
        {/* <Container>
          <div className="home-bottom">
            <div>
              <h2>Study</h2>
              <img src={TestPicture} className="home-image"/>
            </div>
            <div>
              <h2>Challenge</h2>
              <img src={TestPicture} className="home-image"/>
            </div>            <div>
              <h2>Record</h2>
              <img src={TestPicture} className="home-image"/>
            </div>
          </div>
        </Container> */}
      </Container>
    </section>
  );
}

export default Home;
