import React from "react";

import Nav from "../../components/nav/nav.component";
import "./movie-details.styles.scss";
import { ReactComponent as PlayIcon } from "../../assets/images/play3.svg";

import MovieImage from "../../assets/images/ussama-azam-Pb_QtB442h4-unsplash.jpg";

class MovieDetails extends React.Component {
  render() {
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
              src={MovieImage}
              alt={`cover for movie title`}
              className="movie__img"
            />
          </div>
          <div className="movie-details">
            <h2 className="movie__title">Avengers End Game</h2>
            <div className="split-column">
              <p className="movie__overview">
                The grave course of events set in motion by Thanos that wiped
                out half the universe and fractured the Avengers ranks compels
                the remaining Avengers to take one final stand in Marvel
                Studios' grand conclusion to twenty-two films, "Avengers:
                Endgame.
              </p>
              <div>
                <p className="movie__cast">
                  <span>Starring:</span> Robert Downey Jr., Chris Evans,
                  Scarlett Johansson, Chris Hemsworth
                </p>
                <p className="movie__genres">
                  <span>Genres:</span> Crime, Fantasy, Adventure, Life Comics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
