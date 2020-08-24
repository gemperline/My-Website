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

export default function SocialWebAppModal() {
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
                <h2 id="transition-modal-title" className={classes.h1 && "gradient-txt"}>Social Web Application</h2>
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
              This web application is a personal project that is currently being developed and serves as a social media web application reminiscent of Twitter or other social blogging sites. I’m using a model like Twitter’s because many of the fundamental components and functionalities are similar, however, the primary use cases of this application will be rather different than what Twitter is used for. The app’s true intentions will have to remain under wraps for now, but I’m excited to share what I’ve made public so far!              <br/>
              <br/>
              <br/>
            </p>
            <h3 className={classes.h3}>Tools</h3>
            <p>
              <br/>
              React JS, Redux, JavaScript, jQuery, JSON, HTML5, CSS3, Bootstrap, Postman, GCF, Firebase
              <br/>
              <br/>
            </p>
            <h3 className={classes.h3}>The Rundown</h3>
            <p>
              <br/>
              The back-end functions and API requests are currently being built using JavaScript and jQuery. API requests are tested using Postman. The app is using Firebase for the database, storage, and authentication; hence, user authorization and other security features are mostly done with Google Cloud Functions.              <br/>
              <br/>
              The front-end is being developed with React JS, Redux, HTML, CSS, and Bootstrap. The UI is sleek and includes working user login and registration pages with form error checking. The home page includes community posts and comments that are retrieved from the database. If a user is logged in, the home page will also display their profile card which contains their picture and basic information on the right side of the page. ‘Like’ buttons have been implemented to posts and are functional. The commenting feature’s functions have been written and are being implemented in the UI soon. Likes and comments on a user’s post each send the user a notification, which is working on the back end, but needs to be implemented in the UI. If a user’s makes any changes to their profile information via the edit modal, the database is updated in real-time and the profile card refreshes with the new information visible.               <br/>
              <br/>
            </p>
            <h3 className={classes.h3}>Images</h3>
            <p>
              <br/>
              Registration Page checks: valid email, password matching, form completeness, username valid.
              <br/>
              <img src={RegisterImg} className={classes.image} alt="Registration Page"/>
              <br/>
              <br/>
              Login Page
              <img src={LoginPageImg} className={classes.image} alt="Login Page"/>
              <br/>
              <br/>
              Home Page
              <img src={HomePageImg} className={classes.image} alt="Home Page"/>
              <br/>
              <br/>
              Editing Profile information
              <img src={EditModalImg} className={classes.image} alt="Edit Profile Modal"/>
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}