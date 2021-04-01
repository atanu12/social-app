import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from '@material-ui/core/Button';
  
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  nav:{
    color:"white",
    textTransform: "capitalize",
    fontSize:"1.2em",
    margin: "0 20px"
  }
}));
const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
     <AppBar position="static">
  <Toolbar>
    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />  
    </IconButton> */}
    <Typography variant="h6" className={classes.title}>
      Social App 
    </Typography>
    <Button color="inherit">
      <Link to='/signin' className={classes.nav} >Signin</Link>
    </Button>
    <Button color="inherit">
      <Link to='/signup' className={classes.nav} >SignUp</Link>
    </Button>
    <Button color="inherit">
      <Link to='/profile' className={classes.nav}>Profile</Link>
    </Button>
  </Toolbar>
</AppBar>
    </div>
  );
};

export default NavBar;
