import React, { Component } from 'react';

// Buttons and Icons
import { ReactComponent as CaretRight } from '../styles/icons/caret-right-white.svg';
import { ReactComponent as MobileMenuIcon } from '../styles/icons/mobileMenu.svg';


export function CustomNavBar() {

    return (
        <div className="nav3">
        <nav>
            <div className="logo">Adam Gemperline</div>
            <label for="btn" className="icon">
                <MobileMenuIcon />
            </label>
            <input type="checkbox" id="btn"></input>
            <ul>
                <li className="violet"><a href="#">Home</a></li>
                <li className="blue"><a href="#about">About</a></li>
                <li className="green"><a href="#">Resume</a></li>
                <li className="yellow">
                <label for="btn-1" className="show">Portfolio +</label>
                <a href="#portfolio">Portfolio</a>
                <input type="checkbox" id="btn-1"/>
                <ul className="yellow-top">
                    <li><a href="#portfolio">Gallery</a></li>
                    <li><a href="https://github.com/gemperline" target="_blank">Adam's GitHub</a></li>
                    <li>
                    <label for="btn-3" className="show">Work Samples +</label>
                    <a href="#" id="hidden-submenu">Work Samples <CaretRight id="caret" alt=">"/></a>
                    <input type="checkbox" id="btn-3"/>
                    <ul>
                        <li><a href="#">Database Tool</a></li>
                        <li><a href="#">Social Web App</a></li>
                        <li><a href="#">Mobile</a></li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li className="orange">
                <label for="btn-2" className="show">Contact +</label>
                <a href="#contact">Contact</a>
                <input type="checkbox" id="btn-2"/>
                <ul className="orange-top">
                    <li><a href="#">Message Me</a></li>
                    <li><a href="#contact">Contact Info</a></li>
                </ul>
                </li>             
            </ul>
        </nav>
        </div>   
    );
};
