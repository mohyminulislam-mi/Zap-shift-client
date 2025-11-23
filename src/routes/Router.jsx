import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Registration from "../pages/Auth/Registration/Registration";
import ForgetPassword from "../pages/Auth/forget-password/ForgetPassword";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "../pages/Rider/Rider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/rider",
        element: (
          <PrivateRoute>
            {" "}
            <Rider />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/coverage",
        element: <Coverage />,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
]);
