import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import LoginScreen from "./LoginScreen";

describe("LoginScreen", () => {
  it("Renders a form with username input, password input, and a submit button", () => {
    render(<LoginScreen />);
    screen.getByLabelText("USERNAME");
    screen.getByLabelText("PASSWORD");
    screen.getByRole("button");
  });
});
