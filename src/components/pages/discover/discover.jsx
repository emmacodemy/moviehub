import React from 'react';
import './discover.scss';
import Nav from '../../nav/nav.component';
import MovieSection from '../../movie-section';

const Discover = () => {
    return ( 
        <div className="discover">
            <Nav/>
            <div className='hero'>

            </div>
            <div>
                <MovieSection title="Movies"/>
                <MovieSection title="Series"/>
            </div>
        </div>
     );
}
 
export default Discover;