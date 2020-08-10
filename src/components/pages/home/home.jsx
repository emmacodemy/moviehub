import React from 'react';
import LandingBanner from '../../landing-banner/landing-banner.component';
import InfoCallout from '../../info-callout/info-callout.component';
import Nav from '../../nav/nav.component';
const Home = () => {
    return (
      <div className="home">
        <Nav/>
        <LandingBanner/>
        <InfoCallout />
      </div>
    );
}

export default Home;