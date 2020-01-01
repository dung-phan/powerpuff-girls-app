import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import App from "./App";
import Movie from "./components/Movie";
import MovieDetails from "./components/MovieDetails";
import store from "./store";

const renderRoutes = path =>
  mount(
    <MemoryRouter initialEntries={[path]}>
      <Provider store={store}>
        <App />
      </Provider>
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
