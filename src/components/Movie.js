import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../actions";
import MovieList from "./MovieList";
class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(6771);
  }
  render() {
    return (
      <div className="background">
        {!this.props.movie ||
        Object.keys(this.props.movie).length === 0 ? null : (
          <div className="container">
            <div className="container__left">
              <img
                className="poster"
                src={this.props.movie.image.original}
                alt="poster"
              />
            </div>
            <div className="container__right">
              <div className="container__right-heading">
                <h1>{this.props.movie.name}</h1>
              </div>
              <div className="container__right-body">
                <div className="container__right-body-summary">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.props.movie.summary
                    }}
                  />
                  <MovieList />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movie: state.movie
  };
};
export default connect(mapStateToProps, { fetchMovie })(Movie);
