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
import LandingPageModal from './modals/LandingPageModal.jsx';
// Images
import LandingPage from '../styles/img/landingPage/landingPage.JPG';



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
    cursor: 'default',
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
  btn: {
    color: '#fff',
    '&hover': {color: '#fff'},
  },
  cardContent: {
    cursor: 'default',
  },
});

export default function LandingPageCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} onMouseEnter={() => useStyles}>
      <CardActionArea disableRipple="true">
        <CardMedia
          className={classes.media}
          image={LandingPage}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h3" className={classes.text}>
            Landing Page Imitation
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.p}> 
            This project was intended to test the ability to replicate a landing page of a popular search engine.
            <br/>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className={classes.btn && "col-md-6"}>
        <LandingPageModal type="button" className={classes.btn}>
            Learn More
          </LandingPageModal>
        </div>
        <div className="col-md-6">
            <Button type="button" className={classes.btn && "gradient-btn gradient-btn-1"} href="https://github.com/gemperline/LandingPage" target="_blank">
                Repository
            </Button>
        </div>
      </CardActions>
    </Card>
  );
}