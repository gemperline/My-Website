import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// Components 
import MyWebsiteModal from './modals/MyWebsiteModal.jsx';
// Images
import DBTool from '../styles/img/myWebsite/landingPage.JPG';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    '&:hover': {boxShadow: '0 0 15px #00d9ff, 0 0 15px #00d9ff'},
  },
  media: {
    height: 190,
    margin: 5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
  },
  text: {
    textAlign: 'left',
    paddingBottom: 16,
    color: '#000'
  },
  p: {
    textAlign: 'center',
    paddingBottom: 16,
    color: '#000'
  },
  btnLeft: {
      textAlign: 'left',
      display: 'flex',
  },
  btnRight: {
    margin: 0
  }
});

export default function MyWebsiteCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} onMouseEnter={() => useStyles}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={DBTool}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3" className={classes.text}>
            This Website
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
            Look familiar? Originally a static HTML site, this website was rebuilt with React and JavaScript to offer a more-responsive design.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="col-md-6">
        <MyWebsiteModal className={classes.btn}>
            Learn More
          </MyWebsiteModal>
        </div>
        <div className="col-md-6">
            <Button className={classes.btn, "gradient-btn gradient-btn-1"} href="https://github.com/gemperline/My-Website" target="_blank">
                Repository
            </Button>
        </div>
      </CardActions>
    </Card>
  );
}