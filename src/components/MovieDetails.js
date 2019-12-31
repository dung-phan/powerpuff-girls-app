import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEpisode } from "../actions";
class MovieDetails extends Component {
  componentDidMount() {
    this.props.fetchEpisode(this.props.match.params.id);
  }
  render() {
    return (
      <div className="episode-background">
        {this.props.episode === undefined ? null : (
          <div className="episode-container">
            <div className="container__left">
              <img
                className="poster"
                src={
                  this.props.episode.image ||
                  "https://static.tvmaze.com/images/no-img/no-img-landscape-text.png"
                }
                alt="poster"
              />
            </div>
            <div className="container__right">
              <div className="container__right-heading">
                <h1>{this.props.episode.name}</h1>
              </div>
              <div className="container__right-body">
                <div className="container__right-body-summary">
                  <h4>Summary: </h4>
                  <div
                    className="text-summary"
                    dangerouslySetInnerHTML={{
                      __html: this.props.episode.summary
                    }}
                  />
                  <div className="container__right-body-episodes">
                    <h4>Episode Info:</h4>
                    <div className="text-summary">
                      <p>Season: {this.props.episode.season}</p>
                      <p>Episode: {this.props.episode.number}</p>
                      <p>
                        Airdate: {this.props.episode.airdate} at{" "}
                        {this.props.episode.airtime}
                      </p>
                      <p>Runtime: {this.props.episode.runtime} minutes</p>
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
  return {
    episode: state.episode
  };
};

export default connect(mapStateToProps, { fetchEpisode })(MovieDetails);
