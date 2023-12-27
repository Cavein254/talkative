import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatsPage from "./pages/ChatsPage";
import LoginPage from "./pages/LoginPage";
import LogOutPage from "./pages/LogOutPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatsPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/logout" component={LogOutPage} />
    </div>
  );
}

export default App;
