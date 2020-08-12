import React from 'react';
import styles from './movie.module.scss';

const Movie = ({title, src, rating, date}) => {
    return (
      <div className={styles.Movie}>
        <div className={styles.img}>
          <img src={src} alt="movie"/>
        </div>
        <h3 className={styles.title}>{ title }</h3>
        <div className={styles.flexbox}>
          <div className={styles.rating}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p className={styles.year}>{ date }</p>
        </div>
      </div>
    );
}

export default Movie;