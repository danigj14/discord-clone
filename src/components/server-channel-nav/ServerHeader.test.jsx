import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import ServerHeader from "./ServerHeader";

describe("ServerHeader", () => {
  it("Renders a button with the server name text", () => {
    render(<ServerHeader name="Server1" />);
    screen.getByRole("button");
    screen.getByText("Server1");
  });
});
