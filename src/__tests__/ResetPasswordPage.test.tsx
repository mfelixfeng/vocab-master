import "@testing-library/jest-dom";
import { describe } from "@jest/globals";
import { renderPage } from "./utils/TestUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ResetPasswordPage", () => {
  it("navigates to sign in page when goto sign up link is clicked", async () => {
    renderPage("/reset-password");

    const gotoSignUpLink = screen.getByText(/返回登录/i);
    expect(gotoSignUpLink).toBeTruthy();

    await userEvent.click(gotoSignUpLink);

    expect(screen.getByText(/欢迎回到词达人/i)).toBeInTheDocument();
  });
});
