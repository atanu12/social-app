import NavBar from "./components/NavBar";
import {BrowserRouter, Route } from 'react-router-dom'
import Home from "./components/pages/Home";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Profile from "./components/pages/Profile";
import Createpost from "./components/pages/Createpost";
import 'react-toastify/dist/ReactToastify.css';

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
   <Route path='/createpost'>
    <Createpost/>
   </Route>
   </BrowserRouter>
  );
}

export default App;
