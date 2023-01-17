import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import ServerIcon from "./ServerIcon";

describe("ServerIcon", () => {
  it("Renders a button", () => {
    render(<ServerIcon />);
    screen.getByRole("button");
  });

  it("Calls the onClick callback function when the button is clicked", () => {
    const fn = vitest.fn();

    render(<ServerIcon onClick={fn} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(fn).toBeCalled();
  });
});
