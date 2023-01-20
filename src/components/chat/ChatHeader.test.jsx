import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ChatHeader from "./ChatHeader";

describe("ChatHeader", () => {
  it("Renders channel name, 6 buttons and a search input", () => {
    render(<ChatHeader channelName="Server Channel" />);

    screen.getByText("Server Channel");
    const buttons = screen.getAllByRole("button");
    screen.getByPlaceholderText("Search");

    expect(buttons).toHaveLength(6);
  });
});
