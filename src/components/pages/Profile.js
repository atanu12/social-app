import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  profileHead: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop:10,
    boxShadow: " 0 2px 3px -1px #9e9e9e ",
    padding: 25
  },
  profileDetails: {
    display: "flex",
    justifyContent: "space-around",
    width:"120%",
    margin: " -20px -5px",
    fontSize: 24,
    fontWeight: 500,
  },
  profileImg: {
    width: 250,
    height: 250,
    borderRadius: "50%",
  },
  profileName:{
    fontSize:"2.5em",
  },
  profileGalary:{
    display: "flex",
    flexWrap:"wrap",
    justifyContent:"space-evenly"
  },
  item:{
    height:"35vh",
    width: '30vw',
    marginTop:20
  }
});

const Profile = () => {
  const classes = useStyles();
  return (
    <div>
      <div id="main_head" className={classes.profileHead}>
        <div id="profile_pic">
          <img
            src="https://cdn.pixabay.com/photo/2020/04/14/10/56/gamer-5041976_960_720.jpg"
            alt="profile pic"
            className={classes.profileImg}
          />
        </div>

        <div id="profile_content">
          <h2 className={classes.profileName} >Atanu Mondol</h2>
          <div id="profile_status" className={classes.profileDetails}>
            <p>post 10</p>
            <p> followers 1000</p>
            <p> following 10</p>
          </div>
        </div>
      </div>
      <div id="profile_galary" className={classes.profileGalary}>
        <img className={classes.item} src="https://images.pexels.com/photos/4937286/pexels-photo-4937286.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        <img className={classes.item}  src="https://images.pexels.com/photos/4937284/pexels-photo-4937284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        <img className={classes.item}  src="https://images.pexels.com/photos/5568769/pexels-photo-5568769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        <img className={classes.item}  src="https://images.pexels.com/photos/5568769/pexels-photo-5568769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        <img className={classes.item}  src="https://images.pexels.com/photos/2041707/pexels-photo-2041707.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        <img className={classes.item}  src="https://images.pexels.com/photos/4624156/pexels-photo-4624156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        <img className={classes.item} src="https://images.pexels.com/photos/4937286/pexels-photo-4937286.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        <img className={classes.item}  src="https://images.pexels.com/photos/4937284/pexels-photo-4937284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        <img className={classes.item}  src="https://images.pexels.com/photos/5568769/pexels-photo-5568769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
      </div>
   
    </div>
  );
};

export default Profile;
