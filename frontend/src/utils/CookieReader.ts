export const CookieReader = (name) => {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ');

  for (const cookie in cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    console.log({ cookieName: cookieValue });
    // if (cookieName === name) {
    //   return cookieValue;
    // }
  }

  return null;
};
