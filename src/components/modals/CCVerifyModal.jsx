import React from 'react';

// Material-UI
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// Images
import MainImage from '../../styles/img/javaGUI/form.JPG';
import ErrorCheckImage from '../../styles/img/javaGUI/errorCheck1.gif';
import VerifyImage from '../../styles/img/javaGUI/verified.gif';


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
    margin: 5,
  },
  link: {
      color: 'blue',
  },
  medImg: {
    width: '50%',
    padding: '10px',
    border: '3px solid #000',
    borderRadius: 5,
    margin: '5',
  },
   center: {
       display: 'flex',
       justifyContent: 'center',
   },
}));

export default function CCVerifyModal() {
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
                <h2 id="transition-modal-title" className={classes.h1 && "gradient-txt"}>Online Checkout GUI - Credit Card Verification</h2>
            </div>
            <div className="row justify-content-center">
                <Button onClick={handleOpen} href="https://github.com/gemperline/Online-Checkout-GUI" target="_blank">
                Code Repository
                </Button>
            </div>
            <br/>
            <h3 className={classes.h3}>Overview</h3>
                <br/>
                This was a Java project that intended to explore the implementation of a widely used banking algorithm, the Luhn Algorithm, that is used to generate and verify credit card numbers.
                I set out to build a simple online store checkout GUI in Java and demonstrated how the Luhn Algorithm can be applied during form error checking to prevent processing errors and denial of sevice on the processing bank's end. 
                <br/>
                <br/>
            <div className={classes.center}>
                <img src={MainImage} className={classes.medImg} alt="Main Form"/>
            </div>
            <p id="transition-modal-description">
                <br/>
                <div className={classes.center}>
                    <p>
                    You can read about how the algorithm works <a href="https://en.wikipedia.org/wiki/Luhn_algorithm" target="_blank" rel="noopener noreferrer" className={classes.link}> here</a>
                    </p>
                </div>
                <br/>
            </p>
            <h3 className={classes.h3}>Card Number Error Handling</h3>
            <p>
              <img src={ErrorCheckImage} className={classes.image} alt="Error check"/>
              <br/>
                It can be seen above that a random card number that meets the 13-16 digit requirement still fails. Upon the 'Purchase' button click event, the number entered in the Card Number field is passed along to a function that runs it through the Luhn Algorithm. The algorithm then performs a sequence of operations and checks on the number and returns a true or false value.
                <br/>
                <br/>
                A false value is returned for an invalid number and the background around the field is highlighted in red.
              <br/>
              <br/>
            <h3 className={classes.h3}>A Valid Card Number</h3>
              <img src={VerifyImage} className={classes.image} alt="Verified"/>
              <p>
                If the card number passes all Luhn Algorithm checks, it is a valid credit card number and the function will return a true value. The system will then parse the text in the input fields and store it in respective private variables. The user is then directed to a very simple payment confirmation page.
              <br/>
              <br/>
                This program was intended solely for implementing the Luhn Algorithm and for practice building a Java GUI. No other credit card details (CVV number, name, etc.) are verified against the provided card number. 
            </p>
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}