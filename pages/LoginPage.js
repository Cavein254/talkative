import React from "react";
import { Button } from "@chakra-ui/react";

const LoginPage = () => {
  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_URL}/auth/google/callback`, "_self");
  };
  return (
    <div>
      <h1>Login with Google</h1>
      <Button onClick={googleAuth} colorScheme="blue">
        Sign in with Google
      </Button>
    </div>
  );
};

export default LoginPage;
