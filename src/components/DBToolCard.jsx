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
import DBToolModal from './modals/DBToolModal.jsx';
// Images
import DBTool from '../styles/img/databaseTool/SimulatedMainForm.jpg';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    // boxShadow: '0 1px 5px #000, 0 0px 0px #000',
    '&:hover': {
      boxShadow: '0 0 15px #00d9ff, 0 0 15px #00d9ff'
    },
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

export default function DBToolCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} onMouseEnter={() => useStyles}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={DBTool}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h3" className={classes.text}>
            Script Manager
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
            A C#/.NET desktop application for managing, testing, and executing SQL and T-SQL database scripts - efficiently.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="col-md-6">
          <DBToolModal>
            Learn More
          </DBToolModal>
        </div>
        <div className="col-md-6">
            <Button className="gradient-btn gradient-btn-1" href="https://github.com/gemperline/databasemanagementtool/" target="_blank">
                Repository
            </Button>
        </div>
      </CardActions>
    </Card>
  );
}