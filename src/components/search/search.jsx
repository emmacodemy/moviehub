import React, { useState } from 'react';
import { connect } from 'react-redux';
import './search.scss';
import { fetchByMoviesSearch } from '../../redux/actions';


const Search = (props) => {
  const [term, setTerm] = useState('');

  const submithandler = (e) => {
    e.preventDefault();

    if (term !== '') {
      props.fetchByMoviesSearch(term);
      setTerm('')
    }
  }

  return (
    <div className="search">
      <h3>Search from our robust collection of movies</h3>
      <form onSubmit={e => submithandler(e)}>
        <input
          onChange={e => setTerm(e.target.value)}
          value={term}
          type="text"
          className="form-control"
          placeholder="Enter Movie name"
        />
        <button type="submit" className="btn btn-danger">
          SEARCH
        </button>
      </form>
    </div>
  );
}
 
export default connect(null, { fetchByMoviesSearch })(Search);