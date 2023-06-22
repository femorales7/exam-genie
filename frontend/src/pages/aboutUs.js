import ProfileTemplate from "../images/ProfileTemplate.jpg";
import AvatarFabian from "../images/AvatarFabian.png";
import Mathew from "../images/Mathew.jpeg";
import avatarJonmin from "../images/avatarJonmin.jpeg"

import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import "../styles/AboutUs.scss";

function AboutUs() {
  return (
    <section id="background">
      <Container fluid className="project-section">
        <div className="profile-container">
          <div className="profile-container-box">
            <img src={avatarJonmin} className="profile-image" />
            <div className="profile-bio">
              <h1>Jongmin Cha</h1>
              <h2>About:</h2>
              <p>
              As a junior web developer, I have strong foundation of using JavaScript, CSS, , PostgreSQL, and React. With these skills, I can build interactive and attractive web applications. I focus on making sure the websites look good and work smoothly for users. I also know how to handle databases effectively using PostgreSQL. Additionally, I use React to create flexible and engaging parts of the website. I enjoy working with others and I'm always eager to learn and contribute to exciting web projects as I continue to develop my skills.
              </p>
              <h2>Hobbies:</h2>
              <p>
                I like to go hiking and play video game. 
              </p>
              <h2>Contact:</h2>
              <h2>
                <FaLinkedin />
                <FaGithub />
                <FaMailBulk />
              </h2>
            </div>
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-container-box">
            <img src={AvatarFabian} className="profile-image" />
            <div className="profile-bio">
              <h1>Fabian</h1>
              <h2>About:</h2>
              <p>
                As a systems engineer and dedicated web developer, I possess a
                strong command of HTML, CSS, and JavaScript, along with
                expertise in technologies such as Node.js, Express, Ruby, Rails,
                SQL, and more. My passion lies in crafting dynamic applications
                and designing visually appealing, functional websites. I thrive
                in collaborative team environments, leveraging my excellent
                teamwork skills to contribute effectively. Similarly, I am
                equally adept at working independently, drawing upon my
                experience and knowledge to deliver innovative solutions that
                make a positive impact. My dedication to building cutting-edge
                solutions and creating memorable user experiences drives my
                commitment to the field of web development.
              </p>
              <h2>Hobbies:</h2>
              <p>
                I enjoy playing soccer and swimming. Reading books is a
                cherished pastime that feeds my imagination, transports me to
                different worlds and broadens my knowledge. In addition,
                spending quality time with my family, accompanied by pleasant
                music or an attractive movie, creates precious moments of
                togetherness and relaxation.
              </p>
              <h2>Contact:</h2>
              <h2>
                <a href="https://www.linkedin.com/in/fabian-morales-782b02145/">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/femorales7">
                  <FaGithub href="https://github.com/femorales7" />
                </a>
                <a href="femorales7@gmail.com">
                  <FaMailBulk />
                </a>
              </h2>
            </div>
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-container-box">
            <img src={Mathew} className="profile-image" />
            <div className="profile-bio">
              <h1>Mathew Charm</h1>
              <h2>About:</h2>
              <p>
                I'm a passionate web developer dedicated to creating immersive
                online experiences. With expertise in HTML, CSS, and JavaScript,
                I build user-friendly websites that engage and captivate
                visitors. Whether working collaboratively or independently, I
                bring a blend of technical proficiency and creative flair to
                deliver high-quality solutions that make a lasting impact.
              </p>
              <h2>Hobbies:</h2>
              <p>
                Fishing, Hunting, Camping, Hiking, Chess
              </p>
              <h2>Contact:</h2>
              <h2>
                <FaLinkedin />
                <FaGithub />
                <FaMailBulk />
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutUs;
