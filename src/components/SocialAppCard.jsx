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
import SocialWebAppModal from './modals/SocialAppModal.jsx';
// Images
import DBTool from '../styles/img/socialApp/HomePage.JPG';



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
  cardContent: {
    cursor: 'default',
  },
});

export default function SocialAppCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} onMouseEnter={() => useStyles}>
      <CardActionArea disableRipple="true">
        <CardMedia
          className={classes.media}
          image={DBTool}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h3" className={classes.text}>
            Social Web App
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
            A React social web application, similar to Twitter, that allows users to connect with one another and share their thoughts.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="col-md-6">
          <SocialWebAppModal className={classes.btn}>
            Learn More
          </SocialWebAppModal>
        </div>
        <div className="col-md-6">
            <Button className="gradient-btn gradient-btn-1" style={{ borderRadius: '30px' }} href="https://github.com/gemperline/Twitter-esque-Social-App" target="_blank">
                Repository
            </Button>
        </div>
      </CardActions>
    </Card>
  );
}