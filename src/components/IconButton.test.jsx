import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import IconButton from "./IconButton";

describe("IconButton", () => {
  it("Renders a button", () => {
    render(<IconButton />);
    screen.getByRole("button");
  });

  it("Calls the onClick callback function when the button is clicked", () => {
    const fn = vitest.fn();

    render(<IconButton onClick={fn} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(fn).toBeCalled();
  });
});
