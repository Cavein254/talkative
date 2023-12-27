import { Button } from "@chakra-ui/react";

const LogOutPage = () => {
  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_URL}/auth/logout`, "_self");
  };
  return (
    <div>
      <h1>Logout</h1>
      <Button onClick={googleAuth} colorScheme="blue">
        LOGOUT
      </Button>
    </div>
  );
};

export default LogOutPage;
