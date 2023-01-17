import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import ServerChannel from "./ServerChannel";

describe("ServerChannel", () => {
  it("Renders a button with the text passed in the name prop", () => {
    render(<ServerChannel name="AServerChannel" />);
    screen.getByRole("button");
    screen.getByText("AServerChannel");
  });

  it("Calls the onClick callback function when the button is clicked", () => {
    const fn = vitest.fn();

    render(<ServerChannel onClick={fn} name="AServerChannel" />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(fn).toBeCalled();
  });
});
