import React from 'react';
import './search.scss'
const Search = () => {
    return ( 
        <div className='search'>
            <h3>Search from our robust collection of movies</h3>
            <form>
                    <input type="text" class="form-control" id="movie" placeholder="enter movie name" />
            <button
              type="submit"
              class="btn btn-danger"
            >
              SEARCH
            </button>
          </form>
        </div>
     );
}
 
export default Search;