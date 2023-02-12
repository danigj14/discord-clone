import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, vitest } from "vitest";
import { getUserInfo } from "../../../services/DiscordCloneDataService";
import HeadMessage from "../../../features/chat/components/HeadMessage";

const mockMessage = {
  id: 0,
  userId: 0,
  content: "Hello this is a message",
  date: new Date("2023-01-01T12:00:00").toString(),
};

describe("HeadMessage", () => {
  vitest.mock("../../../services/DiscordCloneDataService");

  it("Renders user profile picture, username, date and message content", async () => {
    getUserInfo.mockReturnValue(
      Promise.resolve({
        id: 0,
        name: "Spiderman",
        profilePicture: "https://avatarfiles.alphacoders.com/233/233448.jpg",
      })
    );

    render(<HeadMessage message={mockMessage} />);

    await waitFor(() => screen.getByRole("img"));
    await waitFor(() => screen.getByText("Spiderman"));
    await waitFor(() => screen.getByText("Hello this is a message"));
    await waitFor(() => screen.getByText("Sun, 01 Jan 2023 11:00:00 GMT")); // TODO Handle dates a different way
  });
});
