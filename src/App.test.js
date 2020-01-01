import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import MovieList from "./components/Movie";

it("shows a movie and episode list", () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(MovieList).length);
});
