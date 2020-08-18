import React from 'react';

// Images
import AG_Logo from '../styles/img/AG_logo.jpg';

export function MyHeader() {
    return (
        <header className="masthead text-white text-center">
        <div className="overlay">
            <div className="container">
            <div id="intro" className="container-fluid hero">
                <div className="hero intro-content col-9">
                    <h1>Adam Gemperline</h1>
                    <h5>Software Dev | Web Design</h5>
                    <a href="#gallery">
                    <button type="button" className="cta">{"Coming Soon!"}</button>
                    </a>
                </div>
                </div>
            </div>
            <div className="row pad-top">
                <div className="col-xl-9 mx-auto">
                <div className="ag-logo" alt="" width="500" height="500">
                    <img src={AG_Logo} alt="AG"/>
                </div>
                </div>
            </div>              
        </div>
        </header>
    );
};