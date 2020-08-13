import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './section.module.scss';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import MovieHeader from '../movie-header/movie-header';
import Movie from '../movie/movie';
import { fetchTrendingMovies } from '../../redux/actions';


class MovieSection extends Component {
  state = {
    error: false
  }

  breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2},
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  
  componentDidMount(){
    this.props.fetchTrendingMovies();
  }

  renderMovies = () => {
    if(this.props.movies) {
      const { movies: { results } } = this.props;
      return (
        <Carousel breakPoints={this.breakPoints}>
          {results.map((movie) => {
            return (
              <Link
                key={movie.id}
                style={{ textDecoration: 'none', color: 'white' }}
                to={`/view/movie/${movie.id}`}
              >
                <Movie
                  movie={movie}
                  title={movie.title}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  rating={movie.vote_average}
                  date={movie.release_date.substring(0, 4)}
                />
              </Link>
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
        <MovieHeader title={title} />
        { this.renderMovies() }
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return {
    movies
  }
}

export default connect(mapStateToProps, { fetchTrendingMovies })(MovieSection);