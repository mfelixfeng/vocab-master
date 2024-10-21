import { ChakraProvider } from "@chakra-ui/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import SignInPage from "../../pages/SignInPage";
import SignUpPage from "../../pages/SignUpPage";
import { render } from "@testing-library/react";
import TermsOfServicePage from "../../pages/TermsOfServicePage";
import PrivacyPolicyPage from "../../pages/PrivacyPolicyPage";
import ResetPasswordPage from "../../pages/ResetPasswordPage";

export const renderPage = (path: string = "/") => {
  render(
    <ChakraProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Routes>
      </MemoryRouter>
    </ChakraProvider>
  );
};
