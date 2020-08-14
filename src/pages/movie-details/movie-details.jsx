import React from "react";
import { connect } from "react-redux";

import Nav from "../../components/nav/nav.component";
import Loader from "../../components/loader/loader";
import "./movie-details.styles.scss";
import { ReactComponent as PlayIcon } from "../../assets/images/play3.svg";
import { fetchMovieDetails } from "../../redux/actions";

import MovieImage from "../../assets/images/ussama-azam-Pb_QtB442h4-unsplash.jpg";

class MovieDetails extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    const id = match.params.id;
    fetchMovieDetails(id)(dispatch);
  }

  render() {
    const movieInfo = this.props.movieInfo;
    if (!movieInfo) {
      return (
        <div>
          <Nav />
          <div className="movie">
            <Loader />
          </div>
        </div>
      );
    }
    let { genres, title, overview, imageUrl } = movieInfo;
    return (
      <div>
        <Nav />
        <div className="movie">
          <div className="movie__img-container">
            <div className="img-overlay">
              <button className="movie__play-button">
                <PlayIcon className="movie__play-icon" /> Play
              </button>
            </div>
            <img
              src={imageUrl}
              alt={`cover for movie title`}
              className="movie__img"
            />
          </div>
          <div className="movie-details">
            <h2 className="movie__title">{title}</h2>
            <div className="split-column">
              <p className="movie__overview">{overview}</p>
              <div>
                <p className="movie__cast">
                  <span>Starring:</span> Robert Downey Jr., Chris Evans,
                  Scarlett Johansson, Chris Hemsworth
                </p>
                <p className="movie__genres">
                  <span>Genres:</span> {genres}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieInfo: state.movies,
});

export default connect(mapStateToProps)(MovieDetails);
