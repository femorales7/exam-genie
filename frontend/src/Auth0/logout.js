import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  console.log(useAuth0());

  return (
   
     <button class="button_navBar_log" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
     <span class="button-text">Log Out</span>
     <div class="fill-container"></div>
   </button>
  );
};

export default LogoutButton;

// <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
// Log Out
// </button>