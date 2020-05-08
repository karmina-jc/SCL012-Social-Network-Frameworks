import React from "react";
import { firebase } from './config/firebase';
import Login from "./components/LoginUser";
import Register from "./components/RegisterUser";
import MyWorks from "./components/MyWorks";
import LeerPost from "./components/LeerPost";
import Favorites from "./components/Favorite";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'

function App() {  
  
  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
          console.log(user)
          if(user){
              setFirebaseUser(user)             
          }else{
              setFirebaseUser(null)
          }
      })
  }, [])

  return firebaseUser !== false ? (
    <Router >
      <div className="contenedor">     
        <Switch>
          <Route path="/" exact>
            <Login />          
          </Route>
          <Route path="/signin">
            <Register />
          </Route>
           <Route path="/myworks" >         
            <MyWorks />
          </Route>
          <Route path="/userhome" >         
            <LeerPost />
          </Route>
          <Route path="/favorites" >         
            <Favorites/>
          </Route>         
        </Switch>  
      </div>  
    </Router>
  ) : (
    <div>Cargando...</div>
  )
}

export default App;
