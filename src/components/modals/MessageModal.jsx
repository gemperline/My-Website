import React, { Component} from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';

// Material-UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  h1: {
    color: 'purple',
    textAlign: 'center',
  },
}));

class FormDialog extends Component {
    classes = useStyles();

    constructor() {
      super()

      this.state = {
        name: '',
        email: '',
        message: ''
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
      e.preventDefault()

      //route
      const { name, email, message } = this.state

      // route
      const form = await axios.post('/api/form', {
        name, // : name // no need to define sice it's the same name
        email,
        message
      })
    }

     handleClickOpen(e) {
      const { open, setOpen } = React.useState(false)
      setOpen(true);
    };
  
    // const handleClose = () => {
    //   setOpen(false);
    // };
    
    render() {

      return (

        
        <Form onSubmit={this.handleSubmit} style={{ width: '500px'}}>

<div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Message Me
        </Button>
      </div>
          <FormGroup>
            <Label for="name">Name: </Label>
            <Input
              type="text"
              name="name"
              id="name"
              label="Name"
              placeholder="Name"
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Name: </Label>
            <Input
              type="email"
              name="email"
              id="email"
              label="Email Address"
              placeholder="Your Email Adress"
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="name">Name: </Label>
            <Input
              type="textarea"
              name="message"
              id="message"
              label="Message"
              placeholder="Your Message..."
              onChange={this.handleChange} />
          </FormGroup>

          <Button color="primary" type="button">
            Subscribe
          </Button>
        </Form>
      );
    }
  }
  export default FormDialog;


    // return (
  //       <div>
  //         <Button variant="outlined" color="primary" onClick={handleClickOpen}>
  //           Message Me
  //         </Button>
  //         <form id="gform" method="POST" className="pure-form pure-form-stacked" data-email="from_email@example.com" action="https://script.google.com/macros/s/AKfycbwjDg8n2H4N0rXtBHLyiptjzDwY1SEzzSrrSH2cOme0WIo3qas/exec">
  //           <Dialog className="msg-header" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
  //             <DialogTitle id="form-dialog-title">Let's Chat!</DialogTitle>
  //             <DialogContent>
  //               <DialogContentText>

  //               </DialogContentText>
  //               <TextField
  //                   id="name"
  //                   label="Name"
  //                   margin="dense"
  //                   name="name"
  //                   type="text"
  //                   className={classes.textField}
  //                   autoFocus
  //                   fullWidth
  //                   required
  //               />
  //               {/* <TextField
  //                 autoFocus
  //                 margin="dense"
  //                 id="phone"
  //                 label="Phone Number"
  //                 type="phonenumber"
  //                 fullWidth
  //               /> */}
  //               <TextField
  //                   autoFocus
  //                   margin="dense"
  //                   id="email"
  //                   label="Email Address"
  //                   name="email"
  //                   type="email"
  //                   fullWidth
  //                   required
  //               />
  //               <TextField
  //                   autoFocus
  //                   margin="dense"
  //                   id="message"
  //                   label="Your Message"
  //                   name="message"
  //                   type="text"
  //                   fullWidth
  //                   required
  //               />  
  //             </DialogContent>
  //             <DialogActions>
  //               <Button onClick={handleClose} color="secondary">
  //                 Cancel
  //               </Button>
  //               <Button onClick={handleClose} color="primary" type="button">
  //                 Subscribe
  //               </Button>
  //             </DialogActions>
  //           </Dialog>
  //         </form>   
  //         <script data-cfasync="false" type="text/javascript" src="https://cdn.rawgit.com/dwyl/learn-to-send-email-via-google-script-html-no-server/master/form-submission-handler.js"></script>
  //       </div>
  //   );
  // }
 