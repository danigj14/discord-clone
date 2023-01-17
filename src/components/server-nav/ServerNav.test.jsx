import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import ServerNav from "./ServerNav";

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
    render(<ServerNav />);
    screen.getByRole("list");

    const listItems = screen.queryAllByRole("listitem");

    expect(listItems).toHaveLength(3);
  });

  it("Renders a list of elements with the 3 default navigation elements plus all the servers passed as props. All list items should contain a button", () => {
    render(<ServerNav servers={mockServers} />);
    screen.getByRole("list");

    const listItems = screen.queryAllByRole("listitem");

    expect(listItems).toHaveLength(6);

    listItems.forEach((li) => expect(li.querySelector("button")).toBeDefined);
  });

  it("Calls the onSelect callback function when a server button is clicked with the server id as argument", () => {
    const fn = vitest.fn();
    render(<ServerNav servers={mockServers} onSelect={fn} />);

    const listItems = screen.queryAllByRole("listitem");

    fireEvent.click(listItems[2].querySelector("button"));

    expect(fn).toBeCalled();
    expect(fn).toBeCalledWith(mockServers[1].id);
  });
});
