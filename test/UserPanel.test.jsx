import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import UserPanel from "../src/components/UserPanel";
import UserContext from "../src/contexts/UserContext";

const mockUser = {
  id: 1,
  username: "Thor",
  password: "Thor",
  name: "Thor",
  profilePicture:
    "https://i.etsystatic.com/27793891/r/il/a2c365/2871234164/il_1588xN.2871234164_dnzf.jpg",
};

describe("asd", () => {
  it("Renders the user profile picture and 3 buttons", () => {
    render(
      <UserContext.Provider value={mockUser}>
        <UserPanel />
      </UserContext.Provider>
    );

    screen.getByText("Thor");
    screen.getByRole("img");
    const buttons = screen.queryAllByRole("button");
    expect(buttons).toHaveLength(3);
  });
});