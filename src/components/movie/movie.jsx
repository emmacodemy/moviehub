import React from 'react';
import styles from './movie.module.scss';
import ReactStars from 'react-rating-stars-component';

const Movie = ({ title, src, rating, date, movie }) => {
  return (
      <div className={styles.Movie}>
        <div className={styles.img}>
          <img src={src} alt="movie" />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.flexbox}>
          <ReactStars
            className={styles.rating}
            count={5}
            value={rating/2}
            size={24}
            activeColor="#ffd700"
            isHalf={true}
            edit={false}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
          />
          <span className={styles.year}>{date}</span>
        </div>
      </div>
  );
}

export default Movie;