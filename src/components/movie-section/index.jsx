import React, { Component } from 'react';
import styles from './section.module.scss';
import Carousel from 'react-elastic-carousel';
import MovieHeader from '../movie-header';
import Movie from '../movie';

class MovieSection extends Component {

  breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  render() {
    const { title } = this.props;

    return (
      <div className={styles.Section}>
        <MovieHeader title={title} />
        <Carousel breakPoints={this.breakPoints}>
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </Carousel>
      </div>
    );
  }
}

export default MovieSection;