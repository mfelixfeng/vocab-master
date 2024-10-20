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
            <Route path="/register" element={<SignUpPage />} />
          </Routes>
        </MemoryRouter>
      </ChakraProvider>
    );

    // 查找按钮元素
    const signUpButton = screen.getByRole("button", { name: /注册/i });
    expect(signUpButton).toBeTruthy();

    const signUpLink = signUpButton.closest("a");
    expect(signUpLink).toBeTruthy();

    if (signUpLink) {
      await userEvent.click(signUpLink);
    }

    expect(screen.getByText(/今天就加入词达人/i)).toBeInTheDocument();
  });
});
