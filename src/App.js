
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from "./Components/SignUp/SignUp";


function App() {
  
  return(

    <Router>
      <Switch>
        

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/signUp">
          <SignUp />
        </Route>

        <Route path="/">
          <Login />
        </Route>

      </Switch>

    </Router>
  )
  
  
}

export default App;
