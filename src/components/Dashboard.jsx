import React, { useState } from 'react';

// Buttons and Icons
import { ReactComponent as TwitterIcon } from '../styles/icons/twitter.svg';
import { ReactComponent as FacebookIcon } from '../styles/icons/facebookIcon.svg';
import { ReactComponent as InstagramIcon } from '../styles/icons/instagram2.svg';
import { ReactComponent as LinkedInIcon } from '../styles/icons/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../styles/icons/githubIcon.svg';


// Transition theme
import { CSSTransition } from 'react-transition-group';

// Styling
import '../styles/css/bootstrap.min.css';



export function Dashboard() {

    const [activeMenu, setActiveMenu] = useState('main');
  
    function DashboardItem(props) {
      return (
      <a href={props.url} 
        title={props.title}
        className="dash-item dash-li-mg"
        target="_blank" rel="noopener noreferrer"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="dash-icon-button">{props.leftIcon}</span>
        { props.children }
      </a>
      );
    }
    return (
      <div className="dashboard">
        <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="[TODO]">
          <div className="dash-menu">
            <DashboardItem 
              leftIcon={<GitHubIcon/>} url="https://github.com/gemperline" title="GitHub">
            </DashboardItem>
  
            <DashboardItem 
              leftIcon={<LinkedInIcon/>} url="https://www.linkedin.com/in/gemperline" title="LinkedIn">
            </DashboardItem>
               
            <DashboardItem 
              leftIcon={<InstagramIcon/>} url="https://www.instagram.com/infinite_adam" title="Instagram">     
            </DashboardItem>
         
            <DashboardItem 
              leftIcon={<TwitterIcon/>} url="https://twitter.com/Adam43169080" title="Twitter">
            </DashboardItem>
  
            <DashboardItem 
              leftIcon={<FacebookIcon/>} url="https://facebook.com" title="Facebook">
            </DashboardItem>
          </div>
        </CSSTransition>
      </div>
    );
  }

  export default Dashboard;