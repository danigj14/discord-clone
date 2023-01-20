import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ChatInput from "./ChatInput";

describe("ChatInput", () => {
  it("Renders an input field and 5 buttons", () => {
    render(<ChatInput channelName="Test Channel" />);
    screen.getByPlaceholderText("Message #Test Channel");
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(5);
  });
});
