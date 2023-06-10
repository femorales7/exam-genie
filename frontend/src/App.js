import React from "react";

import TopNavigation from "./components/TopNavigationBar";
import LoginButton from "./Auth0/login";
import LogoutButton from "./Auth0/logout";
import Profile from "./Auth0/profile";

const App = () => {
  return (
    <>
    <TopNavigation />
    <LoginButton />
    <LogoutButton />
    <Profile />
    </>
  )
}


export default App;
