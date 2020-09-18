import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';

// Material-UI
import Button from '@material-ui/core/Button';
import MsgButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { TextareaAutosize } from '@material-ui/core';

// firebase db
import {db} from '../firebase.js';


const styles = {

};



const FormDialog = () => {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    // prevent data from being lost on event triggers
    e.preventDefault();

    db.collection('messages').add({
      name: name,
      email: email,
      message: message,
    })
    .then(() => {
      alert("Thank's for reaching out, I'll get back to you shortly!");
    })
    .catch(error => {
      alert("Hmm... that didn't work. I'll begin fixing this issue ASAP!");
    });

    handleClose();
    
    // set input values to empty
    setName('')
    setEmail('')
    setMessage('')
  };

  return (
    <Form onSubmit={handleSubmit}>
      <MsgButton
        style={{ 
        borderRadius:'30px',
        borderWidth: '2px',
        backgroundColor: 'rgb(0, 231, 255)',
        color: '#000',
        fontFamily: 'sans-serif',
        fontSize: '18px',
        textTransform: 'none',
        borderWidth: '1px',
        padding: '2px 15px',
        }}
        className="msgBtn"
        variant="outlined"
        color="primary" 
        onClick={handleClickOpen} 
        disableRipple="true">
          Message Me
      </MsgButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="Form-dialog-title" >
        <DialogTitle id="form-dialog-title" className="txt-center" style={{ color: "purple" }}>Let's Chat!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your information and message below
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="message"
            label="Message"
            placeholder="What's On Your Mind?"
            multiline
            fullWidth
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" style={{ borderRadius:'30px'}} disableRipple="true">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" type="submit" style={{ borderRadius:'30px'}} disableRipple="true">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </Form>
  
  );
}

  {/* <Dialog open={open} onClose={handleClose} aria-labelledby="Form-dialog-title" onSubmit={handleSubmit}>
        
      </Dialog> */}

export default withStyles(styles)(FormDialog);





// class FormDialog extends Component {
//     // classes = useStyles();

//     constructor() {
//       super()

//       this.state = {
//         name: '',
//         email: '',
//         message: ''
//       }

//       this.handleChange = this.handleChange.bind(this)
//       this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange = e => {
//       this.setState({ [e.target.name]: e.target.value })
//     }

//     async handleSubmit(e) {
//       e.preventDefault()

//       //route
//       const { name, email, message } = this.state

//       // route
//       const form = await axios.post('/api/form', {
//         name, // : name // no need to define sice it's the same name
//         email,
//         message
//       })
//     }

//      handleClickOpen(e) {
//       const { open, setOpen } = React.useState(false)
//       setOpen(true);
//     };
  
    // const handleClose = () => {
    //   setOpen(false);
    // };
    
    // render() {

//       return (

        
//         <Form onSubmit={this.handleSubmit} style={{ width: '500px'}}>

// <div>
//         <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
//         Message Me
//         </Button>
//       </div>
//           <FormGroup>
//             <Label for="name">Name: </Label>
//             <Input
//               type="text"
//               name="name"
//               id="name"
//               label="Name"
//               placeholder="Name"
//               onChange={this.handleChange} />
//           </FormGroup>
//           <FormGroup>
//             <Label for="email">Name: </Label>
//             <Input
//               type="email"
//               name="email"
//               id="email"
//               label="Email Address"
//               placeholder="Your Email Adress"
//               onChange={this.handleChange} />
//           </FormGroup>
//           <FormGroup>
//             <Label for="name">Name: </Label>
//             <Input
//               type="textarea"
//               name="message"
//               id="message"
//               label="Message"
//               placeholder="Your Message..."
//               onChange={this.handleChange} />
//           </FormGroup>

//           <Button color="primary" type="button">
//             Subscribe
//           </Button>
//         </Form>
//       );
//     }
//   }
//   export default FormDialog;


//     return (
//         <div>
//           <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//             Message Me
//           </Button>
//           <form id="gform" method="POST" className="pure-form pure-form-stacked" data-email="from_email@example.com" action="https://script.google.com/macros/s/AKfycbwjDg8n2H4N0rXtBHLyiptjzDwY1SEzzSrrSH2cOme0WIo3qas/exec">
//             <Dialog className="msg-header" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//               <DialogTitle id="form-dialog-title">Let's Chat!</DialogTitle>
//               <DialogContent>
//                 <DialogContentText>

//                 </DialogContentText>
//                 <TextField
//                     id="name"
//                     label="Name"
//                     margin="dense"
//                     name="name"
//                     type="text"
//                     className={classes.textField}
//                     autoFocus
//                     fullWidth
//                     required
//                 />
//                 {/* <TextField
//                   autoFocus
//                   margin="dense"
//                   id="phone"
//                   label="Phone Number"
//                   type="phonenumber"
//                   fullWidth
//                 /> */}
//                 <TextField
//                     autoFocus
//                     margin="dense"
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     type="email"
//                     fullWidth
//                     required
//                 />
//                 <TextField
//                     autoFocus
//                     margin="dense"
//                     id="message"
//                     label="Your Message"
//                     name="message"
//                     type="text"
//                     fullWidth
//                     required
//                 />  
//               </DialogContent>
//               <DialogActions>
//                 <Button onClick={handleClose} color="secondary">
//                   Cancel
//                 </Button>
//                 <Button onClick={handleClose} color="primary" type="button">
//                   Subscribe
//                 </Button>
//               </DialogActions>
//             </Dialog>
//           </form>   
//           <script data-cfasync="false" type="text/javascript" src="https://cdn.rawgit.com/dwyl/learn-to-send-email-via-google-script-html-no-server/master/form-submission-handler.js"></script>
//         </div>
//     );
//   }
// }
//    export default FormDialog;