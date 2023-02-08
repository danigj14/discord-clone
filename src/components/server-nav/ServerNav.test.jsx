import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import MainNav from "../MainNav";

const mockServers = [
  {
    id: 0,
    name: "ReactJS",
    imgUrl: "https://git.ir/media/uploads/2020/05/09/reactjs_logo.jpg",
  },
  {
    id: 1,
    name: "The Odin Project",
    imgUrl:
      "https://cdn.dribbble.com/users/1256820/screenshots/3201241/odin2.png",
  },
  {
    id: 2,
    name: "Visual Studio Code",
    imgUrl:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--aAImjgPE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/hfzfrz3xlx7kkqpag260.jpg",
  },
];

describe("ServerNav", () => {
  it("Renders a list of elements with the 3 default navigation elements when no server list is passed as prop", () => {
    render(<MainNav />);
    screen.getByRole("list");

    const listItems = screen.queryAllByRole("listitem");

    expect(listItems).toHaveLength(3);
  });

  it("Renders a list of elements with the 3 default navigation elements plus all the servers passed as props. All list items should contain a button", () => {
    render(<MainNav servers={mockServers} />);
    screen.getByRole("list");

    const listItems = screen.queryAllByRole("listitem");

    expect(listItems).toHaveLength(6);

    listItems.forEach((li) => expect(li.querySelector("button")).toBeDefined);
  });

  it("Calls the onSelection callback function with the correct argument depending on the type of selection", () => {
    const fn = vitest.fn();
    render(<MainNav servers={mockServers} onSelection={fn} />);

    const listItems = screen.queryAllByRole("listitem");

    fireEvent.click(listItems[0].querySelector("button"));
    expect(fn).toBeCalledWith({ type: "DIRECT_MESSAGES" });

    fireEvent.click(listItems[1].querySelector("button"));
    expect(fn).toBeCalledWith({ type: "SERVER", value: mockServers[0] });

    fireEvent.click(listItems[2].querySelector("button"));
    expect(fn).toBeCalledWith({ type: "SERVER", value: mockServers[1] });

    fireEvent.click(listItems[4].querySelector("button"));
    expect(fn).toBeCalledWith({ type: "ADD_A_SERVER" });

    fireEvent.click(listItems[5].querySelector("button"));
    expect(fn).toBeCalledWith({ type: "EXPLORE" });
  });
});
