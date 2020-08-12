import React from 'react';
import './discover.scss';
import Nav from '../../components/nav/nav.component';
import DiscoverHero from '../../components/discover-hero/discover-hero';
import Search from '../../components/search/search';
import MovieSection from '../../components/movies-section/movies-section';
import SeriesSection from '../../components/series-section/series-section';

const Discover = () => {
    return ( 
        <div className="discover">
            <Nav/>
            <DiscoverHero/>
            <Search/>
            <MovieSection title="Movies"/>
            <SeriesSection title="Series"/>
        </div>
     );
}
 
export default Discover;