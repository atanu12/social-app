import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      padding: 100,
      textAlign: "center",
      height: 420,
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
        justifyContent: 'center'
    }
  });
const Signup = () => {
    const classes = useStyles()

    // get the data from backend
    const history = useHistory()
    const [name, setName]= useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")

    const PostData=()=>{
      const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
      if(!validEmail.test(email)){
        toast.error('Enter a valid Email')
        return
      }

      fetch('/signup' , {
        method: 'post',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          name,
          password,
          email
        })
      }).then(res =>res.json())
      .then(data =>{
        if(data.error){
          toast.error(data.error)
        }else{
          toast.success(data.message)
          history.push('/signin')
        }
      })
      .catch(err =>{
        console.log(err);
      })
    }



    return (
        <div className={classes.maindiv}>
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterTop variant="h5" component="h2">
            Social App
          </Typography>
          <Typography className={classes.inputGap}>
            <TextField
              id="outlined-basic"
              label="User Name"
              type="text"
              variant="outlined"
              className={classes.testField}
              value={name}
              onChange={ (e)=> setName(e.target.value) }
            />
          </Typography>

          <Typography className={classes.inputGap}>
            <TextField
              id="outlined-basic"
              label="email"
              type="email"
              variant="outlined"
              className={classes.testField}
              value={email}
              onChange= {(e)=> setEmail(e.target.value) }
            />
          </Typography>

          <Typography className={classes.inputGap}>
            {" "}
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              type="password"
              className={classes.testField}
              value={password}
              onChange={(e)=> setPassword(e.target.value) }
            />
          </Typography>

          <Button variant="contained" color="primary" onClick={()=>PostData() }>
            Sign Up
          </Button>
        </CardContent>
        <CardActions className={classes.moreDetails} >
          <Link to="/signin">Alrady have an Account</Link>
        </CardActions>
      </Card>
      <ToastContainer/>
    </div>
    )
}

export default Signup
