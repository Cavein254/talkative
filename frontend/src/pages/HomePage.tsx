import MainSidebar from "../components/mainsidebar/MainSidebar";
import ChatModal from "../components/modal/ChatModal";
import Navbar from "../components/nav/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <ChatModal />
      <MainSidebar />
    </div>
  );
};

export default HomePage;
