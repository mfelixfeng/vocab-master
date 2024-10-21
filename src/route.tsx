import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import SignUpConfirmPage from "./pages/SignupConfirmPage";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/terms-of-service", element: <TermsOfServicePage /> },
      { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
      { path: "/reset-password", element: <ResetPasswordPage /> },
      { path: "/sign-up-confirm", element: <SignUpConfirmPage /> },
    ],
  },
]);
