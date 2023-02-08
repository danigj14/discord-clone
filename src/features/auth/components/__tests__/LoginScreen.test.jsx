import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import LoginForm from "../LoginForm";

describe("LoginScreen", () => {
  it("Renders a form with username input, password input, and a submit button", () => {
    render(<LoginForm />);
    screen.getByLabelText("USERNAME");
    screen.getByLabelText("PASSWORD");
    screen.getByRole("button");
  });
});
