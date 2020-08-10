import React from 'react';
import styles from './movie.module.scss';

const Movie = (props) => {
    return (
      <div className={styles.Movie}>
        <div className={styles.img}></div>
        <h3 className={styles.title}>The Boys of Old</h3>
        <div className={styles.flexbox}>
          <div className={styles.rating}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p className={styles.year}>2020</p>
        </div>
      </div>
    );
}

export default Movie;