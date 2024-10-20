import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      { path: "/sign-in", element: <SignInPage /> },
    ],
  },
]);
