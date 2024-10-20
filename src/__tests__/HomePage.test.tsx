import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderPage } from "./utils/TestUtils";

describe("HomePage", () => {
  it("navigates to sign up page when register button is clicked", async () => {
    renderPage();

    await clickLinkButton(/注册/i);

    expect(screen.getByText(/今天就加入词达人/i)).toBeInTheDocument();
  });

  it("navigates to sign up page when get started button is clicked", async () => {
    renderPage();

    await clickLinkButton(/立即开始学习之旅/i);

    expect(screen.getByText(/今天就加入词达人/i)).toBeInTheDocument();
  });

  it("navigates to sign up page when get started immediately button is clicked", async () => {
    renderPage();

    await clickLinkButton("立即开始");

    expect(screen.getByText(/今天就加入词达人/i)).toBeInTheDocument();
  });

  it("navigates to sign in page when sign in button is clicked", async () => {
    renderPage();

    await clickLinkButton(/登录/i);

    expect(screen.getByText(/欢迎回到词达人/i)).toBeInTheDocument();
  });
});

async function clickLinkButton(buttonName: RegExp | string) {
  const signUpButton = screen.getByRole("button", { name: buttonName });
  expect(signUpButton).toBeTruthy();

  const signUpLink = signUpButton.closest("a");
  expect(signUpLink).toBeTruthy();

  if (signUpLink) {
    await userEvent.click(signUpLink);
  }
}
