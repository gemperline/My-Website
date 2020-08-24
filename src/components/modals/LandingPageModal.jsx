import React from 'react';

// Material-UI
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// Images
import MainImage from '../../styles/img/databaseTool/SimulatedMainForm.jpg';
import ErrorPrompt from '../../styles/img/databaseTool/SimulatedErrorUI.jpg';



const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '40px',
    overflow: 'hidden',
    position: 'fixed',
    border: '2px solid #000',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '3px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: '50%',
    position: 'absolute',
    top: '6%',
    overflow: 'scroll',
    maxHeight: '90%',
    fontFamily: 'Roboto',
  },
  h1: {
    color: 'purple',
    textAlign: 'center',
  },
  h3: {
    color: '#a002fc',
  },
  image: {
    width: '100%',
    padding: '40px',
  },
  btn: {
    color: '#fff',
    '&hover': {color: '#fff'},
  },
}));

export default function LandingPageModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="gradient-btn gradient-btn-1" onClick={handleOpen}>
        Learn More
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="row justify-content-center">
                <h2 id="transition-modal-title" className={classes.h1 && "gradient-txt"}>Imitating A Landing Page</h2>
            </div>
            <div className="row justify-content-center">
                <Button onClick={handleOpen} href="https://github.com/gemperline/databasemanagementtool/" target="_blank">
                Code Repository
                </Button>
            </div>
            <br/>
            <h3 className={classes.h3}>Overview</h3>
            <p id="transition-modal-description">
              <br/>
              This project was intended to test the ability to replicate a landing page of a popular search engine.
                A responsive menu and dashboard were added along with self-designed graphics, icons, and buttons. 
            <br/>
            <br/>
            </p>
            <h3 className={classes.h3}>Tools</h3>
            <p>
              <br/>
              
              <br/>
              <br/>
            </p>
            <h3 className={classes.h3}>Images</h3>
            <p>
              <br/>
              
              <br/>
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}