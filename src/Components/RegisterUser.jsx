import React from 'react';
import { firebase } from "../config/firebase";
import { withRouter } from "react-router-dom";
import "./register.css";



const RegisterUser = (props) => {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState(null)

  const signIn = (e) => {
    e.preventDefault()
    if(!email.trim()){
      setError("Ingrese Correo Electronico")
      return
    }
    if(!pass.trim()){
      setError("Ingrese Contraseña")
      return
    }
    if(pass.length < 6){
      setError("La contraseña debe tener más de 6 caracteres")
      return
    }
    setError(null)
    addUser()
  }

  const addUser = React.useCallback(async () => {
    try {

      const res = await firebase.auth().createUserWithEmailAndPassword(email, pass)
      console.log(res)
      await firebase.firestore().collection('users').doc(res.user.email).set({
        displayName: name,
        photoURL: res.user.photoURL,
        email: res.user.email,
        uid: res.user.uid
    })
    setEmail('')
    setPass('')
    setError(null)

    alert("Registro de usuario completo")
    props.history.push('/')

    } catch (error) {
      if(error.code === "auth/invalid-email"){
        setError("Correo no valido")
      }
      console.log(error)
      
    }

  }, [email, pass, name, props.history])

  return (
    <div className="fullRegister">
      <h3>Registro</h3>
      <div>
        <form className="registerForm" onSubmit={signIn}>
          {
            error && (
              <div>
                {error}
              </div>
            )
          }
          <input 
          type="text" 
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
          value={name}
          />
          <input
            type="email"
            placeholder="correo Electronico"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
          <button className="btnSignin" type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(RegisterUser);
