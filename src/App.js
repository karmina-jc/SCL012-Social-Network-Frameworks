import React from 'react';
import Login from './Components/LoginUser'
import Register from './Components/RegisterUser'
import LeerPost from './Components/LeerPost';
import SubirPost from './Components/SubirPost';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            Inicio...
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/SingIn">
            <Register />
          </Route>
      
        </Switch>
      </div>
    </Router>
  );
}

export default App;
