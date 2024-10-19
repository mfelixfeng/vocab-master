import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import "@testing-library/jest-dom";
import RegisterPage from "../pages/RegisterPage";

describe("HomePage", () => {
  it("navigates to register page when register button is clicked", async () => {
    render(
      <ChakraProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </MemoryRouter>
      </ChakraProvider>
    );

    // 查找按钮元素
    const registerButton = screen.getByRole("button", { name: /注册/i });
    expect(registerButton).toBeTruthy();

    const registerLink = registerButton.closest("a");
    expect(registerLink).toBeTruthy();

    if (registerLink) {
      await userEvent.click(registerLink);
    }

    expect(screen.getByText(/User Register/i)).toBeInTheDocument();
  });
});
