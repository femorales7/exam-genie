import "../styles/Footer.scss";
import { Link } from "react-router-dom";




const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div classname="sb__footer-link-div">
            <h4>My Account</h4>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/results">Results</Link>
            <Link to="/logout">Logout</Link>
          </div>
          <div classname="sb__footer-link-div">
            <h4>Helpful Links</h4>
            <Link to="/dashboard">Feedback</Link>
            <Link to="/results">Contact</Link>
            <Link to="/logout">About Us</Link>
          </div>
          <div classname="sb__footer-link-div">
            <h4>Information</h4>
            <Link to="/dashboard">FAQ</Link>
            <Link to="/results">Terms of Service</Link>
            <Link to="/logout">Privacy Policy</Link>
          </div>
          <div classname="sb__footer-link-div">
            <h4>Social Media</h4>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer;