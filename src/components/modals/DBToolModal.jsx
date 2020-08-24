import React from 'react';

// Material-UI
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// Images
import MainImage from '../../styles/img/databaseTool/SimulatedMainForm.jpg';




const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '40px',

    overflow: 'scroll',
    position: 'fixed',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: '50%',
    position: 'absolute',
    top: '10%',
    overflow: 'scroll',
    maxHeight: '90%',
  },
  image: {
    width: '100%',
    padding: '40px',
  }
}));

export default function TransitionsModal() {
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
      <Button className={classes.btn, "gradient-btn gradient-btn-1"} onClick={handleOpen}>
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
            <h2 id="transition-modal-title">Script Manager Database Tool</h2>
            <img src={MainImage} className={classes.image} alt="Image"/>
            <h3>Overview</h3>
            <p id="transition-modal-description">
              <br/>
              Below are sample images and the main file of code for a software application that I built during my internship at Total System Services (TSYS) in Broomfield, Colorado. This application is written in C# / .NET and uses embedded T-SQL queries to interface with MS SQL Server and the databases residing on company servers. 
              <br/>
              <br/>
              My initial objective was to build an in-house (proprietary) desktop application to be used by the Database Administration and Remote Management teams that would automate a tedious quarterly data scrubbing and testing process.  Essentially, this application was built to test and run approximately 175 lengthy SQL scripts in a sequential order that would perform ETL processes, data scrubbing and spoofing, among other things. The run time from the first to last script generally took several hours, and many errors types would require troubleshooting and then restarting the run cycle all over. This application allows for errors to be resolved while pausing the execution and resuming upon fixing the issue. This feature alone made the entire process much more efficient. 
              <br/>
              <br/>
              After tackling the primary objective, features were added such as an Execution Log which displays the application’s processes and errors as they occur. An error log was created to store previous errors along with their details. The UI was improved to support right-click menu shortcuts, file options, a dark/light theme switch, a ‘sort by’ dropdown menu to sort the database records, a progress bar for execution, and a search bar that filtered records upon each keystroke. Restrictions on textbox values were also applied to some of the fields that take user input in order to prevent mistakes and typos.
              <br/>
              <br/>
            </p>
            <h3>Screenshots with simulated results</h3>
            <p>
              <br/>
              Due to restrictions and privacy concerns, I have simulated the DataGridView (table on right displaying the database) and the Script View panel in Adobe Photoshop.
              <br/>
              <br/>
              Typically, the form would look a bit more “active” and would show scroll bars on the table and on the Script View panel. During execution, the Execution Log tab is automatically viewed and outputs all processes and errors as they occur in the left-side panel. The Error Log tab remains in the background, but when clicked, all errors can be viewed in detail and the user can clear the log when they choose. 
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}