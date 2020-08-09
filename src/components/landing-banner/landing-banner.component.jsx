import React from 'react';
import "./landing-banner.styles.scss"
import BannerImg from "../../assets/images/banner-img2.jpg"

const LandingBanner = () => {
    return (
        <div className="banner-container" style={{backgroundImage:`url(${BannerImg})`}}>
            <div className="landing-content">
                <h1>Watch thousands of shows and movies, with plans starting at $5.99/month</h1>
                <p>With our sinzumoney, spending and jacuzzi plans</p>
                <button>GET STARTED</button>
            </div>
        </div>
    );
}

export default LandingBanner;