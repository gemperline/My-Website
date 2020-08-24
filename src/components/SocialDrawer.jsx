import React from 'react';
import clsx from 'clsx';
// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// Buttons and Icons
import { ReactComponent as ConnectButton } from '../styles/icons/user-circle.svg';
// Components
import { Dashboard } from '../components/Dashboard.jsx';

const useStyles = makeStyles({
  list: {
    width: '100%',
    backgroundColor: 'background-color: rgba(0, 0, 0, 0.7);'
  },
  fullList: {
    width: 'auto',
    backgroundColor: 'background-color: rgba(0, 0, 0, 0.7);'
  },
  listItem: {
      maxWidth: '50%',
      display: 'inline-flex',
  },
  display: {
    display: 'inline-flex',
  }
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
                <Dashboard/> 
  
    </div>
  );

  return (
    <div>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
            <ConnectButton id="connectBtn" onClick={toggleDrawer(anchor, true)}>{anchor}</ConnectButton>
            <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
            >
            {list(anchor)}
            </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}