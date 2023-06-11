import React from "react";
import '../styles/TopNavigationBar.scss'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Auth0/login";
import LogoutButton from "../Auth0/logout";
import TopMenu from "./TopMenu";

const TopNavigation = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">Exam Genie</span>
        <TopMenu/>
      <div>
        { isAuthenticated ? <LogoutButton/> : <LoginButton/>}
      </div>
    </div>
  )
}

export default TopNavigation;