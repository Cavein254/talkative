const LogOutPage = () => {
  const googleAuth = () => {
    window.open(`${import.meta.env.VITE_REACT_APP_URL}/auth/logout`, "_self");
  };
  return (
    <div>
      <h1>Logout</h1>
      <button onClick={googleAuth}>LOGOUT</button>
    </div>
  );
};

export default LogOutPage;
