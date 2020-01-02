import React from "react";
import Movie from "../Movie";
import Root from "../../root";
import { mount } from "enzyme";
import moxios from "moxios";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://api.tvmaze.com/shows/6771", {
    status: 200,
    response: { image: "", summary: "" }
  });
});
afterEach(() => {
  moxios.uninstall();
});
it("can fetch a poster image and movie info", done => {
  const wrapped = mount(
    <Root>
      <Movie />
    </Root>
  );

  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("img").length).toEqual(1);
    expect(wrapped.find("h1").length).toEqual(1);
    done();
    wrapped.unmount();
  });
});
