import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Tooltip from "./Tooltip";

describe("Tooltip", () => {
  it("Renders the children", () => {
    render(<Tooltip>Test Tooltip</Tooltip>);
    screen.getByText("Test Tooltip");
  });
});
