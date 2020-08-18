// TODO: uninstall material-ui, react-hover
import React, { useState } from 'react';

/* eslint-env jquery */
import { closeDDOnClick } from './functions/actions.js';
import { closeDashOnClick } from './functions/actions.js';

// React Components
import { DropdownMenu } from './components/DropdownMenu.jsx';
import { Dashboard } from './components/Dashboard.jsx';
import { CustomNavBar }   from './components/Navbar.jsx';
import { MyHeader } from './components/MyHeader.jsx';
import { About } from './components/About.jsx';
import { Spacer } from './components/Spacer.jsx';
import  DBToolCard  from './components/DBToolCard.jsx';

// Images
import Palms from './styles/img/palms.jpg';


// Buttons and Icons
import { ReactComponent as ConnectButton} from './styles/icons/user-circle.svg';

class App extends React.Component {
  render() {
    return (

      <div className="App">
        <CustomNavBar/>
        <MyHeader/>
        <Spacer/>
        <About/>

    <div id="portfolio" class="container-fluid hero white-trans">
      <h2>Work Samples</h2>
      <div className="row">
        <DBToolCard/>
      </div>
      <Spacer/>
    </div>

        {/* Contact */}
        <div id="contact" className="container-fluid hero contact-background">
          <img src={Palms}/>
          <div className="hero contact-content">
            <h2>Contact Me</h2>
            <p>I'm interested in learing about new opportunities from software 
              development to web design &ndash; let's chat!
            </p>
            <a className="email" href="mailto:adamgemperline@gmail.com"><span>Email me!</span></a>
            <a href="#contact" data-toggle="modal" data-target="#message-modal"><button type="button" className="cta">Contact</button></a>
          </div>
        </div>
  
        
        {/* Footer items */}
        <footer className="footer py-4">
          <div className="row align-items-center">
            {/* left  */}
            <div className="col-lg-4 text-lg-left">
                  <a className="mr-3 ml-3" href="#">Home</a>
                  <a className="mr-3" href="#about">About</a>
                  <a className="mr-3" href="#portfolio">Portfolio</a>
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
  