import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import SignInSuccess from "./components/SignInSuccess";
import Home from "./components/Home";
import DashBoard from "./components/DashBoard";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/DashBoard",
      element: <DashBoard />,
    },
    {
      path: "/signSuccess",
      element: <SignInSuccess />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
