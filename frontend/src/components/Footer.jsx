import "../styles/Footer.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>My Account</h4>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/results">Results</Link>
            <Link to="/logout">Logout</Link>
          </div>
          <div className="sb__footer-links_div">
            <h4>Helpful Links</h4>
            <Link to="/dashboard">Feedback</Link>
            <Link to="/results">Contact</Link>
            <Link to="/logout">About Us</Link>
          </div>
          <div className="sb__footer-links_div">
            <h4>Information</h4>
            <Link to="/dashboard">FAQ</Link>
            <Link to="/results">Terms of Service</Link>
            <Link to="/logout">Privacy Policy</Link>
          </div>
          <div className="sb__footer-links_div">
            <h4>Social Media</h4>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
      </div>

      <hr></hr>

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

  )
}

export default Footer;