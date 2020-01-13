import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import App from "./App";
import Movie from "./components/Movie";
import MovieDetails from "./components/MovieDetails";
import Root from "./root";

const renderRoutes = path =>
  mount(
    <MemoryRouter initialEntries={[path]}>
      <Root>
        <App />
      </Root>
    </MemoryRouter>
  );
describe("#routes", () => {
  it("renders main page for the movie on initial route", () => {
    const component = renderRoutes("/");

    expect(component.find(Movie)).toHaveLength(1);
  });
  it("renders detail page for episodes", () => {
    const component = renderRoutes("/episodes/:id");

    expect(component.find(MovieDetails)).toHaveLength(1);
  });
});
