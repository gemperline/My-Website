import React from 'react';

// Material-UI
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// Images
import RegisterImg from '../../styles/img/socialApp/Register.JPG';
import LoginPageImg from '../../styles/img/socialApp/Login.JPG';
import HomePageImg from '../../styles/img/socialApp/HomePage.JPG';
import EditModalImg from '../../styles/img/socialApp/EditModal.JPG';


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
  }
}));

export default function MyWebsiteModal() {
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
                <h2 id="transition-modal-title" className={classes.h1, "gradient-txt"}>AdamGemperline.com</h2>
            </div>
            <div className="row justify-content-center">
                <Button className={classes.btn && "in-modal-btn"} onClick={handleOpen} href="https://github.com/gemperline/Twitter-esque-Social-App" target="_blank">
                Code Repository
                </Button>
            </div>
            <br/>
            <h3 className={classes.h3}>Overview</h3>
            <p id="transition-modal-description">
              <br/>
              This website serves as a portfolio for some of my work. It's also an ongoing project in which I'll be implementing Search Engine Optimization practices, fun animations, and other neat features.
              <br/>
              <br/>
            </p>
            <h3 className={classes.h3}>Tools</h3>
            <p>
              <br/>
              React JS, JavaScript, jQuery, JSON, HTML5, CSS3, Bootstrap, AWS Amplify
              <br/>
              <br/>
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}