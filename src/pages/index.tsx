import { GlobalStyle } from "../styles/global";
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import { Error } from "./error";
import { Dashboard } from "./dashboard";
import { Signin } from "./signin";
import { Signup } from "./signup";

const ProtectedRoutes = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    errorElement: <Navigate to="/error" />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/product",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/error",
    element: <Error />,
  },
]);

export function Pages() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <GlobalStyle />
    </div>
  );
}
