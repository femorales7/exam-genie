import { Container } from "react-bootstrap";
import ProfileTemplate from "../images/ProfileTemplate.jpg";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function AboutUs() {
  return (
    <section id="background">

    <Container fluid className="project-section">
    <img src={ ProfileTemplate } />
    <div>
      <div>Fabian</div>
      <div>About:</div>
        <div>
          I'm a passionate web developer dedicated to creating immersive online experiences. With expertise in HTML, CSS, and JavaScript, I build user-friendly websites that engage and captivate visitors. Whether working collaboratively or independently, I bring a blend of technical proficiency and creative flair to deliver high-quality solutions that make a lasting impact.
        </div>
      <div>Hobbies:</div>
        <div>
          Insert Hobbies here, Insert Hobbies here, Insert Hobbies here, Insert Hobbies here,
        </div>
      <div>Contact:</div>
        <div>
        <FaGithub />
        <FaLinkedin />
        </div>
    </div>
    </Container>

    <Container fluid className="project-section">
    <img src={ ProfileTemplate } />
    <div>
      <div>Fabian</div>
      <div>About:</div>
        <div>
          I'm a passionate web developer dedicated to creating immersive online experiences. With expertise in HTML, CSS, and JavaScript, I build user-friendly websites that engage and captivate visitors. Whether working collaboratively or independently, I bring a blend of technical proficiency and creative flair to deliver high-quality solutions that make a lasting impact.
        </div>
      <div>Hobbies:</div>
        <div>
          Insert Hobbies here, Insert Hobbies here, Insert Hobbies here, Insert Hobbies here,
        </div>
      <div>Contact:</div>
        <div>
        <FaGithub />
        <FaLinkedin />
        </div>
    </div>
    </Container>
    <Container fluid className="project-section">
    <img src={ ProfileTemplate } />
    <div>
      <div>Fabian</div>
      <div>About:</div>
        <div>
          I'm a passionate web developer dedicated to creating immersive online experiences. With expertise in HTML, CSS, and JavaScript, I build user-friendly websites that engage and captivate visitors. Whether working collaboratively or independently, I bring a blend of technical proficiency and creative flair to deliver high-quality solutions that make a lasting impact.
        </div>
      <div>Hobbies:</div>
        <div>
          Insert Hobbies here, Insert Hobbies here, Insert Hobbies here, Insert Hobbies here,
        </div>
      <div>Contact:</div>
        <div>
        <FaGithub />
        <FaLinkedin />
        </div>
    </div>
    </Container>

    </section>
    
  )
}

export default AboutUs;