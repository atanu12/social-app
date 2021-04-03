import React, {useState} from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { toast,ToastContainer } from 'react-toastify';


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
  const history = useHistory()
    const classes = useStyles()
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("")
    const [url, setUrl] = useState()


    const postDetails =()=>{
      const data = new FormData()
      data.append('file',image);
      data.append("upload_preset","social-app");
      data.append("cloud_name","social-app-atanu")
      fetch('https://api.cloudinary.com/v1_1/social-app-atanu/image/upload',{
        method:'post',
        body:data
      }).then(
        res=> res.json()
        ).then(data=>{
          // passing the image url
          setUrl(data.url)
        }).catch(err=>{
          console.log(err);
        })

        fetch('/createpost',{
          method:'post',
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            title,
            body,
            pic:url
          })
        }).then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.error){
            toast.error(data.error)
          }else{
            toast.success("Posted Successfully")
            history.push('/')
          }
        }).catch(err=>{
          console.log(err);
        })
    }
    return (
        <div className={classes.maindiv}>
          <ToastContainer/>
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
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />
          </Typography>

          <Typography className={classes.inputGap}>
            {" "}
            <TextField
              id="outlined-basic"
              label="Body"
              type="message"
              className={classes.testField}
              value={body}
              onChange={(e)=>setBody(e.target.value)}
            />
          </Typography>

          <Typography className={classes.inputGap} >
            {" "}
            <TextField
              label="uplode photo"
              type="file"
              className={classes.testField}
              
              onChange={(e)=>setImage(e.target.files[0])}
            />
          </Typography>

          <Button variant="contained" color="primary" style={{fontSize:'1.2rem'}}  onClick={()=>postDetails()}>
            Post
          </Button>
        </CardContent>
        
      </Card>
        </div>
    )
}

export default Createpost
