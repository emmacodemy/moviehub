import React from 'react';
import './pricing.css';
import logo from './image/loog.png';

function Pricing() {
  return (
    <div className="pricing-background">


      <nav className="navbar navbarborder navbar-expand-lg navbar-light bg-black">
        <a className="navbar-brand" href="#"><img src={logo}/></a>
        <button className="navbar-toggler navbarbutton" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link navbarlinkcolor pb-lg-0 pb-3 pl-lg-5" href="#">Discover <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbarlinkcolor pb-lg-0 pb-3 pl-lg-5" href="#">Sign In</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link navbarlinkcolor pb-lg-0 pb-3 pl-lg-5" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* main-section */}

      <div className="container-fluid pb-5">
        <header className="pricing-header">
          <h1 className="pt-5 pb-5 text-center">Select Your Plan</h1>
        </header>
        <div className="row justify-content-center">

          <div className="pricing-box mb-5 mx-3 mx-lg-0 col-xs-10 col-sm-10 col-lg-4">
            <div className="pricing-alignment">
              <div className="sinzu-border">
                <h6 className="text-center pt-3 spending">Sinzu money</h6>
              </div>
            </div>
            <h2 className="text-center pt-3 price pb-3">$17<small className="price-duration">/month</small></h2>
            <p className="text-center policy-paragraph">Stream Unlimited movies</p>
            <p className="text-center policy-paragraph">Up to 3 user profiles</p>
            <p className="text-center policy-paragraph">Watch on your TV, laptop, phone, or tablet</p>
            <p className="text-center policy-paragraph">Watch on 2 different screens at the same time</p>
            <p className="text-center policy-paragraph">Live TV with 65+ top channels. No cable required</p>
            <p className="text-center policy-paragraph">Live TV guide to navigate channels</p>
            <div className="pricing-alignment mt-5">
              <button className="btn select-plan-button">SELECT PLAN</button>
            </div>
          </div>


          <div className="pricing-box mb-5 mx-3 mx-lg-0 col-xs-10 col-sm-10 col-lg-4">
            <div className="pricing-alignment">
              <div className="jacuzzi-border">
                <h6 className="text-center pt-3 spending">Jacuzzi</h6>
              </div>
            </div>
            <h2 className="text-center pt-3 price pb-3">$34<small className="price-duration">/month</small></h2>
            <p className="text-center policy-paragraph">Stream Unlimited movies</p>
            <p className="text-center policy-paragraph">Up to 3 user profiles</p>
            <p className="text-center policy-paragraph">Watch on your TV, laptop, phone, or tablet</p>
            <p className="text-center policy-paragraph">Watch on 2 different screens at the same time</p>
            <p className="text-center policy-paragraph">Live TV with 65+ top channels. No cable required</p>
            <p className="text-center policy-paragraph">Live TV guide to navigate channels</p>
            <div className="pricing-alignment mt-5">
              <button className="btn select-plan-button">SELECT PLAN</button>
            </div>
          </div>

          <div className="pricing-box mb-5 mx-3 mx-lg-0 col-xs-10 col-sm-10 col-lg-4">
            <div className="pricing-alignment">
              <div className="spending-border">
                <h6 className="text-center pt-3 spending">Spending</h6>
              </div>
            </div>
            <h2 className="text-center pt-3 price pb-3">$25<small className="price-duration">/month</small></h2>
            <p className="text-center policy-paragraph">Stream Unlimited movies</p>
            <p className="text-center policy-paragraph">Up to 3 user profiles</p>
            <p className="text-center policy-paragraph">Watch on your TV, laptop, phone, or tablet</p>
            <p className="text-center policy-paragraph">Watch on 2 different screens at the same time</p>
            <p className="text-center policy-paragraph">Live TV with 65+ top channels. No cable required</p>
            <p className="text-center policy-paragraph">Live TV guide to navigate channels</p>
            <div className="pricing-alignment mt-5">
              <button className="btn select-plan-button">SELECT PLAN</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Pricing;
