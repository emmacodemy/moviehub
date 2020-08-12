import React from 'react';
import './pricing.css';
import Nav from '../../components/nav/nav.component';

function Pricing() {
    return (
        <div className="pricing-background">
            <Nav/>

            <div className="container pb-5">
                <header className="pricing-header">
                    <h1 className="pt-5 mt-5 pb-5 text-center">Select Your Plan</h1>
                </header>

                <div className="row justify-content-around">

                    <div className=" mb-5 mx-3 mx-lg-0 col-xs-10 col-sm-10 col-lg-4">
                        <div className="pricing-box d-flex flex-column col-lg-12">
                            <div className="pricing-alignment">
                                <div className="sinzu-border">
                                    <h6 className="text-center pt-3 spending">Sinzu money</h6>
                                </div>
                            </div>
                            <h2 className="text-center pt-3 price pb-3">$17<small className="price-duration">/month</small>
                            </h2>
                            <p className="text-center policy-paragraph">Stream Unlimited movies</p>
                            <p className="text-center policy-paragraph">Up to 3 user profiles</p>
                            <p className="text-center policy-paragraph">Watch on your TV, laptop, phone, or tablet</p>
                            <p className="text-center policy-paragraph">Watch on 2 different screens at the same time</p>
                            <div className="pricing-alignment mt-auto">
                                <button className="btn select-plan-button">SELECT PLAN</button>
                            </div>
                        </div>
                    </div>

                    <div className="mb-5 mx-3 mx-lg-0 col-xs-10 col-sm-10 col-lg-4">
                        <div className="pricing-box d-flex flex-column col-lg-12">
                            <div className="pricing-alignment">
                                <div className="spending-border">
                                    <h6 className="text-center pt-3 spending">Spending</h6>
                                </div>
                            </div>
                            <h2 className="text-center pt-3 price pb-3">$25<small className="price-duration">/month</small>
                            </h2>
                            <p className="text-center policy-paragraph">Stream Unlimited movies</p>
                            <p className="text-center policy-paragraph">Up to 3 user profiles</p>
                            <p className="text-center policy-paragraph">Watch on your TV, laptop, phone, or tablet</p>
                            <p className="text-center policy-paragraph">Watch on 2 different screens at the same time</p>
                            <p className="text-center policy-paragraph">Live TV with 65+ top channels. No cable required</p>
                            <p className="text-center policy-paragraph">Live TV guide to navigate channels</p>
                            <div className="pricing-alignment mt-auto">
                                <button className="btn select-plan-button">SELECT PLAN</button>
                            </div>
                        </div>

                    </div>

                    <div className="mb-5 mx-3 mx-lg-0 col-xs-10 col-sm-10 col-lg-4">
                        <div className="pricing-box d-flex flex-column col-lg-12">
                            <div className="pricing-alignment">
                                <div className="jacuzzi-border">
                                    <h6 className="text-center pt-3 spending">Jacuzzi</h6>
                                </div>
                            </div>
                            <h2 className="text-center pt-3 price pb-3">$34<small className="price-duration">/month</small>
                            </h2>
                            <p className="text-center policy-paragraph">Stream Unlimited movies</p>
                            <p className="text-center policy-paragraph">Up to 3 user profiles</p>
                            <p className="text-center policy-paragraph">Watch on your TV, laptop, phone, or tablet</p>
                            <p className="text-center policy-paragraph">Watch on 2 different screens at the same time</p>
                            <p className="text-center policy-paragraph">Record Live TV with 50 hours of Cloud DVR storage</p>

                            <div className="pricing-alignment mt-auto">
                                <button className="btn select-plan-button">SELECT PLAN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
