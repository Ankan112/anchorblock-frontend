import { createBrowserRouter } from "react-router-dom";
import SignUp from "../components/SignUp/SignUp";
import Home from "../components/Home/Home";
import SignIn from "../components/SignIn/SignIn";
import Users from "../components/Users/Users";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../components/Dashboard/Dashboard";
import Projects from "../components/Projects/Projects";
import Tasks from "../components/Tasks/Tasks";
import Reporting from "../components/Reporting/Reporting";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/reporting",
    element: <Reporting />,
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
    element: (
      <PrivateRoute>
        <Users />
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
]);
