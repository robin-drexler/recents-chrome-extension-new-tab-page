import React from "react";
import Recent from "../src/components/recent";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);
describe("Site", () => {
  it("contains the sites title, so it is fully revealed on hover", async () => {
    var data = {
      title: "important title"
    };

    const { queryByTitle } = await render(<Recent data={data} />);
    expect(queryByTitle("important title")).toBeTruthy();
  });

  it("links to given url", async () => {
    var data = {
      url: "http://jimdo.com/"
    };
    const { container } = await render(<Recent data={data} />);
    expect(container.querySelector(".site-link").href).toEqual(
      "http://jimdo.com/"
    );
  });

  it("contains an non breaking space, when no title is set, so item occupies full height when there is no content", async () => {
    var data = {
      title: ""
    };

    const { queryByText, debug, container } = await render(
      <Recent data={data} />
    );
    expect(container.querySelector(".site-title").textContent).toEqual(
      "\u00a0"
    );
  });

  it("indicates removal when x is hovered", async () => {
    var data = {
      title: ""
    };

    const { queryByTitle, container } = await render(<Recent data={data} />);

    expect(
      container.firstChild.classList.contains("site-removal-intended")
    ).toBeFalsy();

    const removeButton = queryByTitle("remove site");

    fireEvent(removeButton, new MouseEvent("mouseover", { bubbles: true }));

    expect(
      container.firstChild.classList.contains("site-removal-intended")
    ).toBeTruthy();

    fireEvent(removeButton, new MouseEvent("mouseout", { bubbles: true }));

    expect(
      container.firstChild.classList.contains("site-removal-intended")
    ).toBeFalsy();
  });
});
