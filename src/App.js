import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import "./scss/_main.scss";
function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/episodes/:id" exact component={MovieDetails} />
    </div>
  );
}

export default App;
