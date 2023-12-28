const LoginPage = () => {
  const googleAuth = () => {
    window.open(
      `${import.meta.env.VITE_REACT_APP_URL}/auth/google/callback`,
      "_self"
    );
  };
  console.log(`${import.meta.env.VITE_REACT_APP_URL}/auth/google/callback`);

  return (
    <div>
      <h1>Login with Google</h1>
      <button onClick={googleAuth}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage;
