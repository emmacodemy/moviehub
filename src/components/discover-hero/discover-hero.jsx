import React from 'react';
import './discover-hero.scss'
const DiscoverHero = () => {
    return ( 
        <div className='hero'>
            <div className="hero-content">
                <h1>The Joker</h1>
                <div >
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span >5.0</span>
                </div>
                <p>In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.
                He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face
                with his alter-ego: the Joker.
                </p>
                <button className="btn watch select-plan-button"><i className="fas fa-play"></i> WATCH NOW</button>
                <button className="btn add select-plan-button"><i className="fas fa-plus"></i>    ADD TO LIST</button>
            </div>
        </div>
     );
}
 
export default DiscoverHero;