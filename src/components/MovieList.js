import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEpisodes } from "../actions";
import { Link } from "react-router-dom";

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchEpisodes(6771);
  }
  render() {
    return (
      <div>
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
    );
  }
}

const mapStateToProps = state => {
  return {
    episodes: state.episodes
  };
};
export default connect(mapStateToProps, { fetchEpisodes })(MovieList);
