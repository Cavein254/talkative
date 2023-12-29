import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MinorSidebar from "./components/minorsidebar/MinorSidebar.tsx";
import Navbar from "./components/nav/Navbar.tsx";
import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import { store } from './redux/app/store.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/nav",
    element: <Navbar />,
  },
  {
    path: "/groups",
    element: <MinorSidebar />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
