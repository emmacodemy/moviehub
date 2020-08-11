import React from 'react';
import "./info-callout.styles.scss"
import LaptopImg from "../../assets/images/laptop.jpg"
import Tv from "../../assets/images/tv.jpg"
import Phone from "../../assets/images/phone.jpg"
const InfoCallout = () => {
    return (
        <div className="info-container">
            <div className="info-box one">
                <div className="text">
                    <div className="inner">
                    <h1>Watch live TV on the GO</h1>
                    <p>Watch your livestreams on smartTVs,Playstation, Xbox, Chromecast, Apple TV, Blu-rau players and more</p>
                    <button>GET STARTED</button>
                    </div>
                </div>
                <div className="info-img">
                    <div className="img-inner">
                        <img src={Tv} alt=""/>
                    </div>
                </div>
            </div>
            <div className="info-box two" style={{flexDirection:"row-reverse"}}>
                <div className="text">
                    <div className="inner">
                    <h1>Download your shows to watch offline.</h1>
                    <p>Save your favorites easily and always have something to watch</p>
                    <button>GET STARTED</button>
                    </div>
                </div>
                <div className="info-img">
                    <div className="img-inner">
                        <img src={Phone} alt=""/>
                    </div>
                </div>
            </div>
            <div className="info-box one">
                <div className="text">
                    <div className="inner">
                    <h1>Watch everywhere.</h1>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
                    <button>GET STARTED</button>
                    </div>
                </div>
                <div className="info-img">
                    <div className="img-inner">
                        <img src={LaptopImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoCallout;