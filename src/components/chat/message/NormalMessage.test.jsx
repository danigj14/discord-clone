import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import NormalMessage from "./NormalMessage";

const mockMessage = {
  id: 0,
  userId: 0,
  content: "Hello this is a message",
  date: new Date("2023-01-01T11:01:23").toString(),
};

describe("NormalMessage", () => {
  it("Renders the message content and the date", () => {
    render(<NormalMessage message={mockMessage} />);
    screen.getByText("Hello this is a message");
    screen.getByText("11:01 AM");
  });
});
