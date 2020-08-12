import React from "react";
import { connect } from "react-redux";
import styles from "./header.module.scss";
import Carousel from "react-elastic-carousel";
import { fetchTrendingSeries, fetchBySeriesType } from "../../redux/actions";

const Movieheader = ({ title, fetchBySeriesType, fetchTrendingSeries }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 320, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3 },
  ];

  const trendingClickHandler = () => {
    fetchTrendingSeries();
  };

  const genreClickHandler = (e) => {
    fetchBySeriesType(e.target.id);
  };

  return (
    <div className={styles.Header}>
      <h1>{title}</h1>
      <hr />
      <Carousel breakPoints={breakPoints}>
        <h6 onClick={trendingClickHandler} className={styles.active}>
          HOT
        </h6>
        <h6 onClick={(e) => genreClickHandler(e)} id="top_rated">
          Top-Rated
        </h6>
        <h6 onClick={(e) => genreClickHandler(e)} id="on_the_air">
          On Air
        </h6>
        <h6 onClick={(e) => genreClickHandler(e)} id="airing_today">
          On Air Today
        </h6>
      </Carousel>
    </div>
  );
};

export default connect(null, {
  fetchTrendingSeries,
  fetchBySeriesType,
})(Movieheader);
