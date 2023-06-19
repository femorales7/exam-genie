import React from "react";
import Particle from "./Particle";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import "../styles/style.scss";
import homeImage from "../images/imageHome.png";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";

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
          </div>
        </Container>
    </section>
  );
}

export default Home;
