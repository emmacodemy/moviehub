import React from 'react';
import './discover.scss';
import Nav from '../../nav/nav.component';
import DiscoverHero from '../../discover-hero/discover-hero';
import Search from '../../search/search';
import MovieSection from '../../movie-section';

const Discover = () => {
    return ( 
        <div className="discover">
            <Nav/>
            <DiscoverHero/>
            <Search/>
            <MovieSection title="Movies"/>
            <MovieSection title="Series"/>
        </div>
     );
}
 
export default Discover;