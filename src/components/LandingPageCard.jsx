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

// Images
import LandingPage from '../styles/img/landingPage/landingPage.JPG';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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

export default function LandingPageCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={LandingPage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3" className={classes.text}>
            Landing Page Imitation
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.p}> 
            This project was intended to test the ability to replicate a landing page of a popular search engine.
            A responsive menu and dashboard were added along with self-designed graphics, icons, and buttons. 
            <br/>
            *Disclaimer*: This project served solely for the purpose of learning and is not in production.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="col-md-6">
            <Button color="primary">
                Learn More
            </Button>
        </div>
        <div className="col-md-6">
            <Button color="primary" href="https://github.com/gemperline/databasemanagementtool/" target="_blank">
                Repository
            </Button>
        </div>
      </CardActions>
    </Card>
  );
}