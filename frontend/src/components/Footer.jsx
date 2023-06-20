import "../styles/Footer.scss";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>My Account</h4>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/results">Results</Link>
            <Link to="/construction">Logout</Link>
          </div>
          <div className="sb__footer-links_div">
            <h4>Helpful Links</h4>
            <Link to="/dashboard">Feedback</Link>
            <Link to="/construction">Contact</Link>
            <Link to="/about">About Us</Link>
          </div>
          <div className="sb__footer-links_div">
            <h4>Information</h4>
            <Link to="/construction">FAQ</Link>
            <Link to="/construction">Terms of Service</Link>
            <Link to="/construction">Privacy Policy</Link>
          </div>
          <div className="sb__footer-links_div">
            <h4>Social Media</h4>
            <div>
              <FaLinkedin />
              <FaGithub />
              <FaMailBulk />
              </div>
          </div>
        </div>
        <div className="sb__footer-below">
        <div className="sb__footer-copyright">
          <p>
            @{new Date().getFullYear()} ExamGenie. Testing
            <div className="sb__footer-below-links">
              <Link to="/Disclaimer">Disclaimer</Link>
            </div>
          </p>
        </div>
      </div>
      </div>

      {/* <hr></hr> */}

      
    </div>

  )
}

export default Footer;