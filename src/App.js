import NavBar from "./components/NavBar";
import {BrowserRouter, Route } from 'react-router-dom'
import Home from "./components/pages/Home";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Profile from "./components/pages/Profile";

function App() {
  return (
   <BrowserRouter>
   <NavBar/>
   <Route path="/" exact>
     <Home/>
   </Route>
   <Route path="/signin" >
    <Signin/>
   </Route>
   <Route path="/signup">
    <Signup/>
   </Route>
   <Route path="/profile">
    <Profile/>
   </Route>
   </BrowserRouter>
  );
}

export default App;
