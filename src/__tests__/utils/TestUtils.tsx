import { ChakraProvider } from "@chakra-ui/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import SignInPage from "../../pages/SignInPage";
import SignUpPage from "../../pages/SignUpPage";
import { render } from "@testing-library/react";

export const renderPage = (path: string = "/") => {
  render(
    <ChakraProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
      </MemoryRouter>
    </ChakraProvider>
  );
};
