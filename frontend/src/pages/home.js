import React from "react";
import Particle from "./Particle";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import "../styles/style.scss";
import homeImage from "../images/imageHome.png";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <div id="center">
            <div className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                We are
                <strong className="main-name"> EXAM GENIE</strong>
              </h1>

              <div style={{ padding: 50 }}>
                <Type />
              </div>
            </div>

            <div >
              <img
                src={homeImage}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px"}}
              />
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
