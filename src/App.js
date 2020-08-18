// TODO: uninstall material-ui, react-hover
import React, { useState } from 'react';

/* eslint-env jquery */
import { closeDDOnClick } from './functions/actions.js';
import { closeDashOnClick } from './functions/actions.js';

// React Components
import { DropdownMenu } from './components/DropdownMenu.jsx';
import { Dashboard } from './components/Dashboard.jsx';
import { CustomNavBar }   from './components/Navbar.jsx';

// Images
import AG_Logo from './styles/img/AG_logo.jpg';
import Palms from './styles/img/palms.jpg';

// Buttons and Icons
import { ReactComponent as ConnectButton} from './styles/icons/user-circle.svg';
import cppIcon from './styles/icons/cppIcon.svg';
import csharpIcon from './styles/icons/csharpIcon.svg';
import html5Icon from './styles/icons/html5Icon.svg';
import css3Icon from './styles/icons/css3Icon.svg';
import jsIcon from './styles/icons/jsIcon.svg';
import reactIcon from './styles/icons/reactIcon.svg';
import nodejsIcon from './styles/icons/nodejsIcon.svg';
import sqlIcon from './styles/icons/sqlIcon.svg';
import javaIcon from './styles/icons/javaIcon.svg';

// Styling
import './App.css';
import './styles/css/bootstrap.min.css';

// Transition theme
import { CSSTransition } from 'react-transition-group';

class App extends React.Component {
  render() {
    return (

      <div className="App">
        <CustomNavBar/>
        
        { /* header row */ }
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



            {/* Search bar row */}
            {/* <div className="row search-bar-margin ht-50">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto inherit-ht">
                <form className="inherit-ht">
                  <div className="form-row inherit-ht">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input type="form" className="form-control form-control-lg" placeholder="Search"/>
                    </div>
                    <div className="col-12 col-md-3 inherit-ht">
                      <button type="submit" className="btn btn-block btn-lg btn-primary inherit-ht">
                        <img id="search-img" src={SearchIcon} alt="SEARCH"/>
                        </button>
                    </div>
                  </div>
                </form>
              </div>
            </div> */}

            {/* Lower buttons row */}
            {/* <div className="row search-bar-margin ht-50  mg-top-30">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto inherit-ht">
                <div className="form-row inherit-ht btn-block">
                  <input className="gbqfba tfB0Bf gNO89b jhp mg-right-15" value="Google Search" aria-label="Google Search" name="btnK" type="submit" data-ved="0ahUKEwjepZLJiKbqAhXjIDQ"/>
                  <input id="gbqfbb" className="tfB0Bf gbqfba jhp inherit-vis mg-left-15" value="I'm Feeling Lucky" aria-label="I'm Feeling Lucky" name="btnJ" type="submit"/>
                </div>
              </div>
            </div>
            <div className="mg-top-30"><a id="promo-link" className="promo-link" href="#!">Join YouTube Creators in Commemorating Pride Month</a></div> */}
              
          </div>
        </header>
  
        {/* About */}
        <div id="spacer" className="container-fluid">
            <div className="row">
              <div className="col-md-6 left-col">
              </div>
              <div className="col-md-6 right-col">
              </div>
            </div>
        </div> 
        <div id="about" className="container-fluid hero white-trans">
          <h2 classNameName="header-txt">About</h2>
          <div className="row">
            <div className="col-md-6 left-col">
              <h2> I'm a forward-thinking, innovative techie who likes to create technology that strengthens social interaction and promotes human development.</h2>
            </div>
            <div className="col-md-6 right-col">
              <h5>I was born in <a href='https://www.google.com/maps/place/Dayton,+OH/@39.8112442,-84.3422415,11z/data=!3m1!4b1!4m5!3m4!1s0x884080d5aedd1403:0xa640e392f20e4ce4!8m2!3d39.7589478!4d-84.1916069' target='_blank'>Dayton, Ohio</a> and moved to the west coast in my early twenties. I have a passion for developing innovative technology that empowers people to connect with one another and improve their level of efficiency. In my free time, I enjoy camping, stargazing, attending music events, traveling the world, pressing buttons, and meeting new people.</h5>
            </div>
          </div>
          <div id="spacer" className="container-fluid">
            <div className="row">
              <div className="col-md-6 left-col">
              </div>
              <div className="col-md-6 right-col">
              </div>
            </div>
            <div className="row pad-top-20">
              <div className="container">
                <h3>My Toolbelt:</h3>
              </div>
              <div className="container toolbelt">
                  <img src={cppIcon} alt="C++" title="C++"/>
                  <img src={csharpIcon} alt="C#" title="C#"/>
                  <img src={html5Icon} alt="HTML5" title="HTML5"/>
                  <img src={css3Icon} alt="HTML5" title="CSS3"/>
                  <img src={jsIcon} alt="HTML5" title="JavaScript"/>
                  <img src={reactIcon} alt="HTML5" title="React"/>
                  <img src={nodejsIcon} alt="HTML5" title="Node.js"/>
                  <img src={sqlIcon} alt="HTML5" title="SQL"/>
                  <img src={javaIcon} alt="HTML5" title="Java"/>
              </div>
            </div>
        </div>


        {/* Contact */}
        <div id="contact" className="container-fluid hero contact-background">
          <img src={Palms}/>
          <div className="hero contact-content">
            <h2>Contact Me</h2>
            <p>I'm interested in learing about new opportunities from software 
              development to web design &ndash; let's chat!
            </p>
            <a href="#" data-toggle="modal" data-target="#message-modal"><button type="button" className="cta">Contact</button></a>
          </div>
        </div>
  
        
        {/* Footer items */}
        <footer className="footer py-4">
          <div className="row align-items-center">
            {/* left  */}
            <div className="col-lg-4 text-lg-left">
                  <a className="mr-3 ml-3" href="#">Home</a>
                  <a className="mr-3" href="#about">About</a>
                  <a className="mr-3" href="#contact">Contact</a>
            </div>
            {/* center */}
            <div id="midFooter" className="col-lg-4 my-3 my-lg-0">
                {
                  <ReactNavbar>
                    <NavIcon icon={<ConnectButton id="connectBtn"/>}>
                      <Dashboard/>
                    </NavIcon>
                </ReactNavbar>
                }     
            </div>
            {/* right  */}
            <div className="col-lg-4 text-lg-right pad-right-10">
              <div class="copyright">
                <span>© Adam Gemperline</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    );
  }
  
}





// generate a navbar
function ReactNavbar(props) {
  return (
    <nav className="navbar2">
      <ul className="navbar2-nav"> { props.children } </ul>
    </nav> 
  );
}

// generate a link item for navbar
function NavLink(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item float-left">
      <a href="#!" className="nav-link" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onClick={() => setOpen(false), closeDDOnClick()}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

// generate an icon item for navbar
function NavIcon(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav2-icon">
      <a href={props.target} className="icon-button" onMouseEnter={() => setOpen(!open)} onClick={() => setOpen(!open), closeDashOnClick()}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

export default App;
  