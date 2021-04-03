import { useEffect,createContext,useReducer,useContext } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Home from "./components/pages/Home";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Profile from "./components/pages/Profile";
import Createpost from "./components/pages/Createpost";
import "react-toastify/dist/ReactToastify.css";
import {reducer,initialState} from './components/reducers/userReducer'

export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const {state,dispatch}= useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      history.push('/')
    }else{
      history.push('/signin')
    }
  }, []) 
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/createpost">
        <Createpost />
      </Route>
    </Switch>
  );
};
function App() {
  const[state,dispatch] =useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
      <NavBar />
      <Routing/>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
