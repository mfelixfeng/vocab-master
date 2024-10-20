import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderPage } from "./utils/TestUtils";

describe("SignInPage", () => {
  it("navigates to sign up page when sign up link is clicked", async () => {
    renderPage("/sign-in");

    const signUpLink = screen.getByText("注册");
    expect(signUpLink).toBeTruthy();

    await userEvent.click(signUpLink);

    expect(screen.getByText(/今天就加入词达人/i)).toBeInTheDocument();
  });
});
