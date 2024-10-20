import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import "@testing-library/jest-dom";
import SignUpPage from "../pages/SignUpPage";

describe("HomePage", () => {
  it("navigates to sign up page when register button is clicked", async () => {
    render(
      <ChakraProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Routes>
        </MemoryRouter>
      </ChakraProvider>
    );

    const signUpButton = screen.getByRole("button", { name: /注册/i });
    expect(signUpButton).toBeTruthy();

    const signUpLink = signUpButton.closest("a");
    expect(signUpLink).toBeTruthy();

    if (signUpLink) {
      await userEvent.click(signUpLink);
    }

    expect(screen.getByText(/今天就加入词达人/i)).toBeInTheDocument();
  });

  it("navigates to sign up page when get started button is clicked", async () => {
    render(
      <ChakraProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Routes>
        </MemoryRouter>
      </ChakraProvider>
    );

    const getStartedButton = screen.getByRole("button", {
      name: /立即开始学习之旅/i,
    });
    expect(getStartedButton).toBeTruthy();

    const getStartedLink = getStartedButton.closest("a");
    expect(getStartedLink).toBeTruthy();

    if (getStartedLink) {
      await userEvent.click(getStartedLink);
    }

    expect(screen.getByText(/今天就加入词达人/i)).toBeInTheDocument();
  });
});
