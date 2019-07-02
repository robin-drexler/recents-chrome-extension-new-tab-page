import React from "react";
import SitesContainer from "../src/components/SitesContainer";
import Site from "../src/components/recent";

import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

function createSite(title, url) {
  return { title, url };
}
describe("Sites Container", function() {
  it("contains sites", async () => {
    var sites = [{}, {}, {}];

    const { container } = await render(
      <SitesContainer sites={sites} site={Site} limit={9} />
    );

    expect(container.querySelectorAll(".site").length).toEqual(3);
  });

  it("filters sites by title", async () => {
    const sites = [
      createSite("Camel", ""),
      createSite("I do match", ""),
      createSite("Cucumber", "")
    ];

    const filter = "i do mat";

    const { container, queryByText } = await render(
      <SitesContainer filter={filter} sites={sites} site={Site} limit={9} />
    );

    expect(container.querySelectorAll(".site").length).toEqual(1);

    expect(queryByText("I do match")).toBeTruthy();
  });

  it("filters sites by url", async () => {
    const sites = [
      createSite("", "http://google.com/1"),
      createSite("", "http://facebook.com/"),
      createSite("", "http://google.com/2")
    ];

    const filter = "Google";

    const { container, queryAllByText, debug } = await render(
      <SitesContainer filter={filter} sites={sites} site={Site} limit={9} />
    );

    expect(container.querySelectorAll(".site").length).toEqual(2);

    expect(container.querySelectorAll(".site[href*=google]").length).toBe(2);
  });
});
