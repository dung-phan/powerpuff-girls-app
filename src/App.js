import React from "react";
import { Route } from "react-router-dom";
import Movie from "./components/Movie";
import MovieDetails from "./components/MovieDetails";
import "./scss/_main.scss";
function App() {
  return (
    <div>
      <Route path="/" exact component={Movie} />
      <Route path="/episodes/:id" exact component={MovieDetails} />
    </div>
  );
}

export default App;
