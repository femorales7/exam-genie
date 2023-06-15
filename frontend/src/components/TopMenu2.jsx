import { Link } from "react-router-dom";

import logo from "../images/Exam-genie1.png";

import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Auth0/login";
import LogoutButton from "../Auth0/logout";

import { FaBeer } from 'react-icons/fa';








const TopMenu2 = () => {

  const { isAuthenticated } = useAuth0();

  return (
    <div className="topNav">
      <div className="topNav-container">
        <img src={logo} className="img-fluid logo" alt="brand" />

        <Link to="/"><FaBeer />Home</Link>
        <Link to="/exam"><FaBeer />Text Exam</Link>
        <Link to="/dashboard"><FaBeer />Dashboard</Link>
        <Link to="/about"><FaBeer />About Us</Link>

        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  )
}

export default TopMenu2;