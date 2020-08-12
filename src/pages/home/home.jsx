import React from 'react';
import LandingBanner from '../../components/landing-banner/landing-banner.component';
import InfoCallout from '../../components/info-callout/info-callout.component';
import Nav from '../../components/nav/nav.component';
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