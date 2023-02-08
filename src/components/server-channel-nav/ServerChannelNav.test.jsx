import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import AuthContext from "../../contexts/AuthContext";
import ServerChannelNav from "./ServerChannelNav";

const mockChannelCategories = [
  {
    id: 4,
    name: "Our Software",
    channels: [
      {
        id: 12,
        name: "Plugins",
      },
      {
        id: 13,
        name: "Advice",
      },
      {
        id: 14,
        name: "About Us",
      },
    ],
  },
];

const mockUser = {
  id: 1,
  username: "Thor",
  password: "Thor",
  name: "Thor",
  tag: "#1475",
  profilePicture:
    "https://i.etsystatic.com/27793891/r/il/a2c365/2871234164/il_1588xN.2871234164_dnzf.jpg",
};

describe("ServerChannelNav", () => {
  it("Renders the channel categories passed via props, the header, and the user panel", () => {
    render(
      <AuthContext.Provider value={mockUser}>
        <ServerChannelNav
          serverName="Server1"
          channelCategories={mockChannelCategories}
        />
      </AuthContext.Provider>
    );

    screen.getByText("Server1");
    screen.getByText("Our Software");
    screen.getByText("Thor");
  });
});
