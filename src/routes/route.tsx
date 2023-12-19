import { createBrowserRouter } from "react-router-dom";
import SignUp from "../components/SignUp/SignUp";
import Home from "../components/Home/Home";
import SignIn from "../components/SignIn/SignIn";
import Users from "../components/Users/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/users",
    element: <Users />,
  },
]);
