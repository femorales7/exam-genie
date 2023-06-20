import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button class="button_navBar_log" onClick={() => loginWithRedirect()}>
      <span class="button-text">Log In</span>
      <div class="fill-container"></div>
    </button>
  );
};

export default LoginButton;

// <button onClick={() => loginWithRedirect()}>Log In</button>;
