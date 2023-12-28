import React from "react";

const LoginPage = () => {
  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_URL}/auth/google/callback`, "_self");
  };
  return (
    <div>
      <h1>Login with Google</h1>
      <button onClick={googleAuth}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage;
