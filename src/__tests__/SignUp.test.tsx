import "@testing-library/jest-dom";
import { describe } from "@jest/globals";
import { renderPage } from "./utils/TestUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("SignUpPage", () => {
  it("navigates to sign in page when sign in link is clicked", async () => {
    renderPage("/sign-up");

    const signUpLink = screen.getByText("登录");
    expect(signUpLink).toBeTruthy();

    await userEvent.click(signUpLink);

    expect(screen.getByText(/欢迎回到词达人/i)).toBeInTheDocument();
  });

  it("navigates to terms of service page when terms of service link is clicked", async () => {
    renderPage("/sign-up");

    const signUpLink = screen.getByText("服务条款");
    expect(signUpLink).toBeTruthy();

    await userEvent.click(signUpLink);

    expect(screen.getByText(/接受条款/i)).toBeInTheDocument();
  });

  it("navigates to privacy policy page when privacy policy link is clicked", async () => {
    renderPage("/sign-up");

    const privacyPolicyLink = screen.getByText("隐私政策");
    expect(privacyPolicyLink).toBeTruthy();

    await userEvent.click(privacyPolicyLink);

    expect(screen.getByText(/信息收集/i)).toBeInTheDocument();
  });
});
