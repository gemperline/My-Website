import React from 'react';

//Components
import { Spacer } from '../components/Spacer.jsx';

// Buttons and Icons
import cppIcon from '../styles/icons/cppIcon.png';
import csharpIcon from '../styles/icons/csharpIcon.png';
import html5Icon from '../styles/icons/html5Icon.png';
import css3Icon from '../styles/icons/css3Icon.png';
import jsIcon from '../styles/icons/jsIcon.png';
import reactIcon from '../styles/icons/reactIcon.png';
import nodejsIcon from '../styles/icons/nodejsIcon.png';
import sqlIcon from '../styles/icons/sqlIcon.png';
import javaIcon from '../styles/icons/javaIcon.png';
import jQueryIcon from '../styles/icons/jQueryIcon.png';


export function About() {
    return (
        <div id="about" className="container-fluid hero white-trans">
          <h2 className="header-txt">About</h2>
          <div className="row">
            <div className="col-md-6 left-col ez-read">
              <h3 className="my-gradient"> I'm a forward-thinking, innovative techie who likes to create technology that strengthens social interaction and promotes human development.</h3>
            </div>
            <div className="col-md-6 right-col ez-read">
              <h3 className="my-gradient">I was born in <a href='https://www.google.com/maps/place/Dayton,+OH/@39.8112442,-84.3422415,11z/data=!3m1!4b1!4m5!3m4!1s0x884080d5aedd1403:0xa640e392f20e4ce4!8m2!3d39.7589478!4d-84.1916069' target='_blank' rel="noopener noreferrer">Dayton, Ohio</a> and moved to the west coast in my early twenties. In my free time, I enjoy camping, stargazing, attending music events, traveling the world, pressing buttons, and meeting new people.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md x-mg-100 ez-read">
              <h3 className="my-gradient">So far, I consider myself to be a bit of a software development generalist. Most of my formal education involved applying back-end programming concepts and OOP and OOA/D techniques. However, the "Creator" in me quickly became interested in designing aesthetically-beautiful things, so I began learning front-end development. I've worked professionally with server-side and end-user langauges and tools, and I'm eager to continue tinkering my way to becoming a master.</h3>
            </div>
          </div>
            
        <div className="row pad-top-100">
            <div className="container">
                <h3>My Toolbelt:</h3>
            </div>
            <div className="container toolbelt">
                <img src={cppIcon} alt="C++" title="C++"/>
                <img src={csharpIcon} alt="C#" title="C#"/>
                <img src={javaIcon} alt="Java" title="Java"/>
                <img src={html5Icon} alt="HTML5" title="HTML5"/>
                <img src={css3Icon} alt="CSS3" title="CSS3"/>
                <img src={jsIcon} alt="JavaScript" title="JavaScript"/>
                <img src={reactIcon} alt="React" title="React"/>
                <img src={nodejsIcon} alt="Node.js" title="Node.js"/>
                <img src={jQueryIcon} alt="jQuery" title="jQuery"/>
                <img src={sqlIcon} alt="SQL" title="SQL"/>
            </div>
            </div>
        </div>
    );
};