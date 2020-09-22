import React from 'react';

// Material-UI
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// Images
import LandingPage from '../../styles/img/landingPage/landingPage.JPG';
import DDGIF from '../../styles/img/landingPage/dd.gif';
import DashGIF from '../../styles/img/landingPage/dash.gif';
import SearchGIF from '../../styles/img/landingPage/searchBar.gif';


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
    padding: '10px',
    border: '3px solid #000',
    borderRadius: 5,
  },
  btn: {
    color: '#fff',
    '&hover': {color: '#fff'},
  },
  p: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  centerTxt: {
    textAlign: 'center',
  },
  b: {
    fontWeight: 'bold',
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
      <Button className="gradient-btn gradient-btn-1" style={{ borderRadius: '30px' }} onClick={handleOpen}>
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
                <Button onClick={handleOpen} href="https://github.com/gemperline/LandingPage" target="_blank">
                Code Repository
                </Button>
            </div>
            <br/>
              <div className={classes.centerTxt}>** <b className={classes.boldTxt}>Disclaimer:</b> This project is intended solely for the purpose of learning and is not deployed. **</div>
            <br/>
            <br/>
            <h3 className={classes.h3}>Overview</h3>
            <p id="transition-modal-description">
              <br/>
              This project was intended to test the ability to replicate a landing page of a popular search engine in a timed setting.
              Contestants were encouraged to add some new functionality or features. Scores were evaluated based page layout accuracy, creativity, and the amount of time needed (24 hr. maximum).
            <br/>
            <br/>
            </p>
            <h3 className={classes.h3}>Tools</h3>
            <p>
              <br/>
              React JS, JavaScript, jQuery, HTML5, CSS3, Bootstrap, React Transition Group, Adobe Photoshop
              <br/>
              <br/>
            </p>
            <h3 className={classes.h3}>The Rundown</h3>
              <br/>
              <img src={LandingPage} className={classes.image} alt="Landing Page"/>
              <p className={classes.p}>
                <br/>
                I chose to replicate Google's landing page. 
                <br/>
                <br/>
              </p>
              <img src={SearchGIF} className={classes.image} alt="Search Bar gif"/>
              <p className={classes.p}>
                <br/>
                This layout is fairly similar to that of Google's landing page at the time. After getting the page layout and elements right, I shifted my focus to adding some new elements.
                <br/>
                <br/>
              </p>
              <img src={DDGIF} className={classes.image} alt="Dropdown gif"/>
              <p className={classes.p}>
                <br/>
                A responsive navigation menu was built using React Transition Group. The menu resizes upon each transition, adjusting it's width and height according to the new list of elements that it is transiitoning to. A few self-designed graphics, icons, and buttons were added as well. 
                <br/>
                <br/>
              </p>
              <img src={DashGIF} className={classes.image} alt="Dashboard gif"/>
              <p className={classes.p}>
                <br/>
                A pop-up dashboard containing quick-links was added at the bottom of the page.
                <br/>
                <br/>
              </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
