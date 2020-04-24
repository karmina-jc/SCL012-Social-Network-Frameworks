import React from "react";
import Login from "./components/LoginUser";
import Register from "./components/RegisterUser";
import LeerPost from "./components/LeerPost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <Router >
      <div className="contenedor">     
        <Switch>
          <Route path="/" exact>
            <Login />          
          </Route>
          <Route path="/signin">
            <Register />
          </Route>
          <Route path="/userhome" >         
            <LeerPost />
          </Route>
        </Switch>  
      </div>  
    </Router>
  );
}

export default App;
