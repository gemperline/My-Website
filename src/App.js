// TODO: uninstall material-ui, react-hover
import React, { useState } from 'react';

// React Components
import { CustomNavBar }   from './components/Navbar.jsx';
import { MyHeader } from './components/MyHeader.jsx';
import { About } from './components/About.jsx';
import  DBToolCard  from './components/DBToolCard.jsx';
import  SocialAppCard  from './components/SocialAppCard.jsx';
import  MyWebsiteCard  from './components/MyWebsiteCard.jsx';
import  LandingPageCard  from './components/LandingPageCard.jsx';
import  CCVerifyCard  from './components/CCVerifyCard.jsx';
import  SwipeableTemporaryDrawer  from './components/SocialDrawer.jsx';
import { Spacer } from './components/Spacer.jsx';
import MessageModal from './components/modals/MessageModal.jsx';

// Images
import Palms from './styles/img/palms.jpg';
import myPhoto from './styles/img/roundProfile.png';

class App extends React.Component {
  render() {
    return (

      <div className="App prevent-shift">
        <CustomNavBar/>
        <MyHeader/>
        <About/>

    <div id="portfolio" className="container-fluid hero white-trans">
      <h2>Work Samples</h2>
      <div className="flex-grid">
 
      <div class="section group">
	<div class="col span_1_of_3">
	  <DBToolCard/>
	</div>
	<div class="col span_1_of_3">
	  <SocialAppCard/>
	</div>
	<div class="col span_1_of_3">
	  <MyWebsiteCard/>
	</div>
</div>
<div class="section group">
	<div class="col span_1_of_3">
    <LandingPageCard/>
	</div>
	<div class="col span_1_of_3">
    <CCVerifyCard/>
	</div>
</div>

      </div>
      <Spacer/>
    </div>

        {/* Contact */}
        <div id="contact" className="container-fluid hero">
          <img id="palms" style={{ width: '100%' }} src={Palms} alt="AG"/>      
          <div className="hero contact-content">  
            <h2>Contact Me</h2>
            <img className="myPhoto" src={myPhoto} alt="Adam Gemperline"/>    
            <p>I'm interested in learing about new opportunities from software 
              development to web design &ndash; let's chat!
            </p>
            {/* <a className="email" href="mailto:adamgemperline@gmail.com"><span>Email me!</span></a> */}
            <div className="box-shadow-5">
              <MessageModal/>
            </div>
          </div>
        </div>
        
        {/* Footer items */}
        <footer id="footer" className="footer py-10">
          <div className="row align-items-center">
            {/* left  */}
            <div id="leftFoot" className="col-lg-4 text-lg-left underline">
                  <a className="mr-3 ml-3" href="#intro">Home</a>
                  <a className="mr-3" href="#about">About</a>
                  <a className="mr-3" href="#portfolio">Portfolio</a>
                  <a className="mr-3" href="#contact">Contact</a>
                  <a className="mr-3" href="#!">Blog</a>
            </div>
            {/* center */}
            <div id="midFoot" className="col-lg-4">
              <ReactNavbar>
                <NavIcon title="Connect With Me" icon={<SwipeableTemporaryDrawer id="connectBtn"/>}/>
              </ReactNavbar>                 
            </div>
            {/* right */}
            <div id="rightFoot" className="col-lg-4 text-lg-right pad-right-10">
              <div className="copyright">
                <span>© Adam Gemperline</span>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-bar"/>
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
// function NavLink(props) {
//   const [open, setOpen] = useState(false);
//   return (
//     <li className="nav-item float-left">
//       <a href="#!" className="nav-link" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onClick={() => setOpen(false), closeDDOnClick()}>
//         {props.icon}
//       </a>
//       {open && props.children}
//     </li>
//   );
// }

// generate an icon item for navbar
function NavIcon(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav2-icon">
      <a href={props.target} className="icon-button" title={props.title} onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

export default App;
  