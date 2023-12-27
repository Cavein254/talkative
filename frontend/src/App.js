import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatsPage from "./pages/ChatsPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatsPage} />
      <Route path="/login" component={LoginPage} />
    </div>
  );
}

export default App;
