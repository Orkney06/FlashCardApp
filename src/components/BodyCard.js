import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import ReactCardFlip from 'react-card-flip';
import { Flip } from '@material-ui/icons';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgb(0, 0, 0, 0.3)",
    padding: "10%",
    margin: "10%",
    backgroundColor: "#fafafa",
    height: '200px',
    overflow: 'hidden',
  },
});

function BodyCard(props) {
  const { userId, question, answer } = props;
  const classes = useStyles();
  return (
    <CardActionArea>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography 
          color="textPrimary"
          variant='body2' 
          component="p"
          align="center"
          >
            {question} : {answer}
          </Typography>
        </CardContent>
      </Card> 
    </CardActionArea>
        
  );
}

export default BodyCard;