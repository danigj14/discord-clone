import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ServerChannel from "./ServerChannel";
import ServerChannelCategory from "./ServerChannelCategory";

describe("ServerChannelCategory", () => {
  it("Renders a button with the name prop text", () => {
    render(<ServerChannelCategory name="AServerCategory" />);

    screen.getByRole("button");
    screen.getByText("AServerCategory");
  });

  it("Renders all the ServerChannel children", () => {
    render(
      <ServerChannelCategory name="AServerCategory">
        <ServerChannel name="ServerChannel1" />
        <ServerChannel name="ServerChannel2" />
        <ServerChannel name="ServerChannel3" />
      </ServerChannelCategory>
    );

    screen.getByText("ServerChannel1");
    screen.getByText("ServerChannel2");
    screen.getByText("ServerChannel3");
  });

  it("Hides all the ServerChannel children on category name button click and shows them when clicked again", () => {
    render(
      <ServerChannelCategory name="AServerCategory">
        <ServerChannel name="ServerChannel1" />
        <ServerChannel name="ServerChannel2" />
        <ServerChannel name="ServerChannel3" />
      </ServerChannelCategory>
    );

    const button = screen.getByText("AServerCategory");

    fireEvent.click(button);

    const channel1 = screen.queryByText("ServerChannel1");
    const channel2 = screen.queryByText("ServerChannel2");
    const channel3 = screen.queryByText("ServerChannel3");
    expect(channel1).toBeNull();
    expect(channel2).toBeNull();
    expect(channel3).toBeNull();

    fireEvent.click(button);

    screen.findByText("ServerChannel1");
    screen.findByText("ServerChannel2");
    screen.findByText("ServerChannel3");
  });
});
