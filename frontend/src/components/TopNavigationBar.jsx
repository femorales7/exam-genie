import React from "react";
import '../styles/TopNavigationBar.scss'
import LoginButton from "../Auth0/login";
import LogoutButton from "../Auth0/logout";

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">Exam Genie</span>
      <div>
        <LoginButton/>
        <LogoutButton/>
      </div>
    </div>
  )
}

export default TopNavigation;