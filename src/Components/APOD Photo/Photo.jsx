import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from "@testing-library/react";

const useStyles = makeStyles({
    card: {
        border: '2px solid black',
        margin: '5vh 60vh',
        padding: '5vh 0',
    },
    media: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '30vh',
        maxHeight: '50vh',
        maxWidth: '100vh',
    },
    typogrophy: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '40vh',
        maxWidth: '80vh',
        maxHeight: '60vh'
    },
});
const APODPhoto = (props) => {
  const classes = useStyles();
  if (!props.url) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} component="img" src={props.url} alt={props.title} />
          <CardContent className={classes.typogrophy}>
            <Typography>{props.title}</Typography>
            <Typography>{props.explanation}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default APODPhoto;
