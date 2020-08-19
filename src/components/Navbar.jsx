import React from 'react';

// Buttons and Icons
import { ReactComponent as CaretRight } from '../styles/icons/caret-right-white.svg';
import { ReactComponent as MobileMenuIcon } from '../styles/icons/mobileMenu.svg';


export function CustomNavBar() {

    return (
        <div className="nav3">
        <nav>
            <div className="logo">Adam Gemperline</div>
            <label htmlFor="btn" className="icon">
                <MobileMenuIcon />
            </label>
            <input type="checkbox" id="btn"></input>
            <ul>
                <li className="violet"><a href="#home">Home</a></li>
                <li className="blue"><a href="#about">About</a></li>
                <li className="green">
                <label htmlFor="btn-1" className="show">Portfolio +</label>
                <a href="#portfolio">Portfolio</a>
                <input type="checkbox" id="btn-1"/>
                <ul className="green-top">
                    <li><a href="#portfolio">Gallery</a></li>
                    <li><a href="https://github.com/gemperline" target="_blank" rel="noopener noreferrer">Adam's GitHub</a></li>
                    <li>
                    <label htmlFor="btn-3" className="show">Work Samples +</label>
                    <a href="#!" id="hidden-submenu">Work Samples <CaretRight id="caret" alt=">"/></a>
                    <input type="checkbox" id="btn-3"/>
                    <ul>
                        <li><a href="#!">Database Tool</a></li>
                        <li><a href="#!">Social Web App</a></li>
                        <li><a href="#!">Mobile</a></li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li className="yellow">
                    <label htmlFor="btn-2" className="show">Contact +</label>
                    <a href="#contact" rel="noopener noreferrer">Contact</a>
                    <input type="checkbox" id="btn-2"/>
                    <ul className="yellow-top">
                        <li><a href="#!">Message Me</a></li>
                        <li><a href="#contact">Contact Info</a></li>
                    </ul>
                </li>
                <li className="orange"><a href="#!">Blog</a></li>             
            </ul>
        </nav>
        </div>   
    );
};
