import React from 'react';

// Icons
import { ReactComponent as CaretRight } from '../styles/icons/caret-right-white.svg';
import { ReactComponent as MobileMenuIcon } from '../styles/icons/mobileMenu.svg';
// Components 
import MessageModal from './modals/MessageModal.jsx';

export function CustomNavBar() {

    return (
        <div className="nav3">
            <nav>
                {/* <div className="logo">Adam Gemperline</div> */}
                <label htmlFor="btn" className="icon">
                    <MobileMenuIcon />
                </label>
                <input type="checkbox" id="btn"></input>
                <ul id="nav-list">
                    <div id="left-nav" className="col-lg-3 col"/>"
                    <div id="center-nav" className="col-lg-6">
                        <li className="violet"><a href="#intro">Home</a></li>
                        <li className="blue"><a href="#about">About</a></li>
                        <li className="green">
                            <label htmlFor="btn-1" className="miniNav">Portfolio +</label>
                            <a href="#portfolio">Portfolio</a>
                            <input type="checkbox" id="btn-1"/>
                            <ul className="green-top">
                                <li><a href="#portfolio">Gallery</a></li>
                                <li><a href="https://github.com/gemperline" target="_blank" rel="noopener noreferrer">Adam's GitHub</a></li>
                                <li className="">
                                    <label htmlFor="btn-3" className="miniNav">Work Samples +</label>
                                    <a href="#portfolio" id="hidden-submenu" className="">Work Samples <CaretRight id="caret" alt=">"/></a>
                                    <input type="checkbox" id="btn-3"/>
                                    <ul>
                                        <li><a href="#portfolio">Database Tool</a></li>
                                        <li><a href="#portfolio">Social Web App</a></li>
                                        <li><a href="#portfolio">This Website</a></li>
                                        <li><a href="#portfolio">Landing Page</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="yellow">
                        <label htmlFor="btn-2" className="miniNav">Contact +</label>
                        <a href="#contact" rel="noopener noreferrer">Contact</a>
                        <input type="checkbox" id="btn-2"/>
                        <ul className="yellow-top">
                            {/* <li><a href="#!">Message Me</a></li> */}
                            <li><a href="#contact">Contact Info</a></li>
                        </ul>
                        </li>
                        <li className="orange"><a title="Coming Soon!" href="#!"><span>Blog</span></a></li>
                    </div>
                    <div id="right-nav" className="col-lg-3 msg">
                        <li id="msg-btn"><MessageModal>Message Me</MessageModal></li>          
                    </div>
                </ul>
            </nav>
        </div>   
    );
};
