import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie, fetchEpisodes } from "../actions";
import { Link } from "react-router-dom";
class MovieList extends Component {
  async componentDidMount() {
    await this.props.fetchMovie(6771);
    await this.props.fetchEpisodes(6771);
  }

  render() {
    return (
      <div className="background">
        {this.props.movie === undefined ? null : (
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
                  <div className="container__right-body-episodes">
                    <h4>Previous episodes</h4>
                    <div className="row ep-list">
                      <div className="col-2-of-4">
                        <h5>Episode name</h5>
                      </div>
                      <div className="col-1-of-4">
                        <h5>Airdate</h5>
                      </div>
                      <div className="col-1-of-4">
                        <h5>Description</h5>
                      </div>
                      {this.props.episodes === undefined
                        ? null
                        : this.props.episodes.map(episode => {
                            return (
                              <Link
                                to={`/episodes/${episode.id}`}
                                className="row ep-render"
                                key={episode.id}
                              >
                                <div className="col-2-of-4">
                                  <h6>{episode.name}</h6>
                                </div>
                                <div className="col-1-of-4">
                                  <h6>{episode.airdate}</h6>
                                </div>
                                <div className="col-1-of-4">
                                  <h6>
                                    SS{episode.season} x {episode.number}
                                  </h6>
                                </div>
                              </Link>
                            );
                          })}
                    </div>
                  </div>
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
  console.log("what is state", state);
  return {
    movie: state[0],
    episodes: state[1]
  };
};
export default connect(mapStateToProps, { fetchMovie, fetchEpisodes })(
  MovieList
);
