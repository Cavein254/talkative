import { useState } from 'react';
import MainSidebar from '../components/mainsidebar/MainSidebar';
import ChatModal from '../components/modal/ChatModal';
import Navbar from '../components/nav/Navbar';
import { useGetAuthUserQuery } from '../redux/services/auth';

const HomePage = () => {
  const { data, error } = useGetAuthUserQuery();
  console.log({ rtkerror: error });
  console.log({ rtkdata: data });
  const [user, setuser] = useState();
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_REACT_APP_URL}/api/auth/login/success`, {
  //     method: 'GET',
  //     credentials: 'include',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((res) => {
  //       if (res.status === 200) return res.json();
  //       throw new Error('error. authetication failure');
  //     })
  //     .then((data) => {
  //       if (!data) {
  //         return;
  //       }
  //       localStorage.setItem('token', JSON.stringify(data?.cookies));
  //     })
  //     .catch((err) => {
  //       console.log({ error_occured: err });
  //     });
  // }, []);
  return (
    <div>
      <Navbar />
      <ChatModal />
      <MainSidebar />
    </div>
  );
};

export default HomePage;
