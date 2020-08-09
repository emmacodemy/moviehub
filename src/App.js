import React from 'react';
import NavBar from './components/nav-bar/nav-bar.component';
import LandingBanner from './components/landing-banner/landing-banner.component';
import InfoCallout from './components/info-callout/info-callout.component';
import Pricing from './components/pages/pricing/pricing'
function App() {
    return (
      <div>
        <NavBar/>
        <LandingBanner/>
        <InfoCallout/>
        <Pricing/>
      </div>
    );
}

export default App;