import { GlobalStyle } from "../styles/global";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Error } from "./error";
import { Dashboard } from "./dashboard";
import { Signin } from "./signin";
import { Signup } from "./signup";


const router = createBrowserRouter([
  {
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
