import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import "@testing-library/jest-dom";
import SignUpPage from "../pages/SignUpPage";

describe("HomePage", () => {
  it("navigates to sign up page when register button is clicked", async () => {
    renderHomePage();

    await clickButton(/注册/i);

    expect(screen.getByText(/今天就加入词达人/i)).toBeInTheDocument();
  });

  it("navigates to sign up page when get started button is clicked", async () => {
    renderHomePage();

    await clickButton(/立即开始学习之旅/i);

    expect(screen.getByText(/今天就加入词达人/i)).toBeInTheDocument();
  });

  it("navigates to sign up page when get started immediately button is clicked", async () => {
    renderHomePage();

    clickButton(/立即开始/);

    expect(screen.getByText(/今天就加入词达人/i)).toBeInTheDocument();
  });
});

async function clickButton(buttonName: RegExp) {
  const signUpButton = screen.getByRole("button", { name: buttonName });
  expect(signUpButton).toBeTruthy();

  const signUpLink = signUpButton.closest("a");
  expect(signUpLink).toBeTruthy();

  if (signUpLink) {
    await userEvent.click(signUpLink);
  }
}

function renderHomePage() {
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
}
