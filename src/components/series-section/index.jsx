import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../movies-section/section.module.scss";
import Carousel from "react-elastic-carousel";
import SeriesHeader from "../series-header";
import Movie from "../movie";
import { fetchTrendingSeries } from "../../redux/actions";

class MovieSection extends Component {
  breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  componentDidMount() {
    this.props.fetchTrendingSeries();
  }

  renderMovies = () => {
    if(this.props.series) {
      const { series: { results } } = this.props;
      return (
        <Carousel breakPoints={this.breakPoints}>
          {results.map((movie) => {
            return (
              <Movie
                key={movie.id}
                title={movie.original_name}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                rating={movie.vote_average}
                date={movie.first_air_date}
              />
            );
          })}
        </Carousel>
      );
    }
    
  }

  render() {
    const { title } = this.props;

    return (
      <div className={styles.Section}>
        <SeriesHeader title={title} />
        {this.renderMovies()}
      </div>
    );
  }
}

const mapStateToProps = ({ series }) => {
  return {
    series,
  };
};

export default connect(mapStateToProps, { fetchTrendingSeries })(MovieSection);
