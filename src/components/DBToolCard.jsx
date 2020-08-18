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
import DBTool from '../styles/img/databaseTool/SimulatedMainForm.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 190,
    margin: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  text: {
    textAlign: 'left',
    paddingBottom: 16,
  },
  btnLeft: {
      textAlign: 'left',
      display: 'flex',
  },
  btnRight: {
    margin: 0
  }
});

export default function DBToolCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={DBTool}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3" className={classes.text}>
            DB Tool
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A C#/.NET desktop application for managing, testing, and executing database scripts - efficiently.
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