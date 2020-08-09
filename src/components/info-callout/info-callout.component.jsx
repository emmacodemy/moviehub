import React from 'react';
import "./info-callout.styles.scss"
import LaptopImg from "../../assets/images/laptop.jpg"

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
                        <img src={LaptopImg} alt=""/>
                    </div>
                </div>
            </div>
            <div className="info-box two" style={{flexDirection:"row-reverse"}}>
                <div className="text">
                    <div className="inner">
                    <h1>Watch live TV on the GO</h1>
                    <p>Watch your livestreams on smartTVs,Playstation, Xbox, Chromecast, Apple TV, Blu-rau players and more</p>
                    <button>GET STARTED</button>
                    </div>
                </div>
                <div className="info-img">
                    <div className="img-inner">
                        <img src={LaptopImg} alt=""/>
                    </div>
                </div>
            </div>
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
                        <img src={LaptopImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoCallout;