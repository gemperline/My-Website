import React, { useState } from 'react';

// Buttons and Icons
import { ReactComponent as GearIcon } from '../styles/icons/gearIcon.svg';
import { ReactComponent as ProfileIcon } from '../styles/icons/profileIcon2.svg';
import { ReactComponent as BackButton } from '../styles/icons/back-button.svg';
import { ReactComponent as LogoutIcon } from '../styles/icons/logout.svg';

import { CSSTransition } from 'react-transition-group';

// Styling
import '../styles/css/bootstrap.min.css';


// generate responsive dropdown menu
export function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuWidth, setMenuWidth] = useState(null);
    const [menuHeight, setMenuHeight] = useState(null);
    
    // calculate and set the size for the responsive dropdown menu
    function calcSize(el) {
        const width = el.offsetWidth + 10;
        const height = el.offsetHeight + 40;
        setMenuWidth(width);
        setMenuHeight(height);
    }

    function DropdownItem(props) {
      return (
      <a href="#!" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        { props.children }
        <span className="icon-right">{props.rightIcon}</span>
      </a>
      );
    }

    // populate list items in dropdown
    return (
      <div className="dropdown" style={{ width: menuWidth, height: menuHeight }}>
        <CSSTransition in={activeMenu=== 'main'} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcSize}>
          <div className="menu">
            <DropdownItem 
              leftIcon={<ProfileIcon/>}>     
              My Profile
            </DropdownItem>
            <DropdownItem 
              leftIcon={<GearIcon/>}
              goToMenu="privacy">
              Privacy
            </DropdownItem>
            <DropdownItem 
              leftIcon={<GearIcon/>}
              goToMenu="settings">
              Settings
            </DropdownItem>
            <DropdownItem 
              leftIcon={<LogoutIcon/>}>
              Log Out
            </DropdownItem>
            <DropdownItem 
              leftIcon={<ProfileIcon/>}>     
              My Profile
            </DropdownItem>
            <DropdownItem 
              leftIcon={<GearIcon/>}
              goToMenu="privacy">
              Privacy
            </DropdownItem>
            <DropdownItem 
              leftIcon={<GearIcon/>}
              goToMenu="settings">
              Settings
            </DropdownItem>
            <DropdownItem 
              leftIcon={<LogoutIcon/>}>
              Log Out
            </DropdownItem>
          </div>
        </CSSTransition>
  
        {/* Privacy */}
        <CSSTransition in={activeMenu === 'privacy'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcSize}>
          <div className="menu">
            <DropdownItem 
              leftIcon={<BackButton />}
              goToMenu="main"/>
            <DropdownItem>No one reads these</DropdownItem>
          </div>
        </CSSTransition>
  
        {/* Settings */}
        <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcSize}>
          <div className="menu">
            <DropdownItem 
              leftIcon={<BackButton />}
              goToMenu="main"/>
            <DropdownItem>Advanced Search</DropdownItem>
            <DropdownItem>Shared Details</DropdownItem>
            <DropdownItem>Help</DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }

  export default DropdownMenu;