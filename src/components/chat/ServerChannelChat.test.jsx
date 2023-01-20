import { render, screen, waitFor } from "@testing-library/react";
import { describe, it } from "vitest";
import ServerChannelChat from "./ServerChannelChat";

const mockMessages = [
  {
    id: 0,
    userId: 0,
    content: "First Message",
    date: new Date("2023-01-01T03:24:07").toString(),
  },
  {
    id: 1,
    userId: 0,
    content: "Second Message",
    date: new Date("2023-01-01T03:24:10").toString(),
  },
];

describe("ServerChannelChat", () => {
  it("Renders the channel name and messages", async () => {
    render(
      <ServerChannelChat channelName="Test Channel" messages={mockMessages} />
    );

    await waitFor(() => screen.getByText("Test Channel"));
    await waitFor(() => screen.getByText("First Message"));
    await waitFor(() => screen.getByText("Second Message"));
  });
});
