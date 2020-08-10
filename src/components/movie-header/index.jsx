import React from 'react';
import styles from './header.module.scss';
import Carousel from 'react-elastic-carousel';

const Movieheader = ({ title }) => {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 320, itemsToShow: 3 },
      { width: 550, itemsToShow: 5},
      { width: 1150, itemsToShow: 7 }
    ];

    return (
        <div className={styles.Header}>
            <h1>{title}</h1>
            <hr />
            <Carousel breakPoints={breakPoints}>
                <h6 className={styles.active}>Trending</h6>
                <h6>Action</h6>
                <h6>Adventure</h6>
                <h6>Anime</h6>
                <h6>Children</h6>
                <h6>Comedy</h6>
                <h6>Crime</h6>
                <h6>Drama</h6>
            </Carousel>
        </div>
    );
}

export default Movieheader;