import React from 'react';
import { connect } from 'react-redux';
import styles from './header.module.scss';
import Carousel from 'react-elastic-carousel';
import { fetchTrendingMovies, fetchByMoviesGenre } from '../../redux/actions';


const Movieheader = ({ title, fetchByMoviesGenre, fetchTrendingMovies }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 320, itemsToShow: 3 },
    { width: 550, itemsToShow: 5},
    { width: 1150, itemsToShow: 7 }
  ];

  const trendingClickHandler = () => {
    fetchTrendingMovies()
  }

  const genreClickHandler = (e) => {
    fetchByMoviesGenre(e.target.id)
  }

    return (
      <div className={styles.Header}>
        <h1>{title}</h1>
        <hr />
        <Carousel breakPoints={breakPoints}>
          <h6 onClick={trendingClickHandler} className={styles.active}>
            Trending
          </h6>
          <h6 onClick={(e) => genreClickHandler(e)} id="28">
            Action
          </h6>
          <h6 onClick={(e) => genreClickHandler(e)} id="12">
            Adventure
          </h6>
          <h6 onClick={(e) => genreClickHandler(e)} id="16">
            Animation
          </h6>
          <h6 onClick={(e) => genreClickHandler(e)} id="28">
            Comedy
          </h6>
          <h6 onClick={(e) => genreClickHandler(e)} id="80">
            Crime
          </h6>
          <h6 onClick={(e) => genreClickHandler(e)} id="18">
            Drama
          </h6>
          <h6 onClick={(e) => genreClickHandler(e)} id="14">
            Fantasy
          </h6>
          <h6 onClick={(e) => genreClickHandler(e)} id="10402">
            Music
          </h6>
          <h6 onClick={(e) => genreClickHandler(e)} id="10749">
            Romance
          </h6>
          <h6 onClick={(e) => genreClickHandler(e)} id="53">
            Thriller
          </h6>
        </Carousel>
      </div>
    );
}

export default connect(null, {
  fetchTrendingMovies,
  fetchByMoviesGenre
})(Movieheader);