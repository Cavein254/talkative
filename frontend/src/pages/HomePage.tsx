import { useEffect, useState } from 'react';
import MainSidebar from '../components/mainsidebar/MainSidebar';
import ChatModal from '../components/modal/ChatModal';
import Navbar from '../components/nav/Navbar';

const HomePage = () => {
  const [user, setuser] = useState();
  useEffect(() => {
    fetch('http://localhost:5000/api/auth/login/success', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        throw new Error('error. authetication failure');
      })
      .then((data) => setuser(data))
      .catch((err) => {
        console.log({ error_occured: err });
      });
  }, []);
  console.log(user);
  return (
    <div>
      <Navbar />
      <ChatModal />
      <MainSidebar />
    </div>
  );
};

export default HomePage;
