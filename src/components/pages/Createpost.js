import React from 'react'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      padding: 100,
      textAlign: "center",
      height: 380,
      width: 350,
      padding: 30,
      overflow: "hidden",
  
    },
    maindiv: {
      background: "#90a4ae",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    inputGap: {
      marginTop: 20,
      marginBottom: 30,
    },
    testField: {
      width: 300,
    },
    moreDetails:{
        display: 'flex',
        justifyContent: 'space-between'
    }
  });

const Createpost = () => {
    const classes = useStyles()
    return (
        <div className={classes.maindiv}>
             <Card className={classes.root}>
        <CardContent>
          <Typography gutterTop variant="h5" component="h2" style={{fontWeight:600}}>
            Create a Post
          </Typography>

          <Typography className={classes.inputGap}>
            <TextField
              id="outlined-basic"
              label="Title"
              type="text"
              className={classes.testField}
            />
          </Typography>

          <Typography className={classes.inputGap}>
            {" "}
            <TextField
              id="outlined-basic"
              label="Body"
              type="message"
              className={classes.testField}
            />
          </Typography>

          <Typography className={classes.inputGap} >
            {" "}
            <TextField
              label="uplode photo"
              type="file"
              className={classes.testField}
            />
          </Typography>

          <Button variant="contained" color="primary" style={{fontSize:'1.2rem'}}>
            Post
          </Button>
        </CardContent>
        
      </Card>
        </div>
    )
}

export default Createpost
