import React from 'react';

// Images
import AG_Logo from '../styles/img/AG_logo.jpg';

export function MyHeader() {
    return (
        <div id="intro" className="container-fluid hero">
            <img src={AG_Logo} className="ag-logo"alt="AG"/>
            <div className="container">
                <div className="hero intro-content col-9">
                    <h1>Adam Gemperline</h1>
                    <h5>Software Dev | Web Design</h5>
                    <a href="#portfolio">
                    <button type="button" className="cta">{"See More"}</button>
                    </a>
                </div>
            </div>
        </div>
    );
};