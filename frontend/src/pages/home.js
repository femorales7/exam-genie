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
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <div id="center">
            <div className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                {/* <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> */}
              </h1>

              <h1 className="heading-name">
                Exam Genie
              </h1>
              <h3>
                Exam Genie is an AI question generator designed the way you want to create questions for your exams. Allowing you to generate different questions for your needs!
              </h3>

              {/* <div style={{ padding: 50 }}>
                <Type />
              </div> */}
            </div>

            {/* <div> */}
              {/* <img
                src={homeImage}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              /> */}
            {/* <button
                className="buttonLets"
                role="button"
                onClick={handleButtonClick}
              >
                Let's try
            </button> */}


            {/* </div> */}
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
