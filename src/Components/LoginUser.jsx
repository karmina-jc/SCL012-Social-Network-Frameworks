import React from "react";
import { firebase } from "../config/firebase";
import { withRouter } from "react-router-dom";


const LoginUser = (props) => {

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState(null)

  const login = (e) => {
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
      setError("La contraseña debe tener 6 caracteres o más")
      return
    }
    setError(null)
    authUser()
  }

  const authUser = React.useCallback(async () => {
    try {

      const res = await firebase.auth().signInWithEmailAndPassword(email, pass)
      console.log(res.user)
          
      setEmail('')
      setPass('')
      setError(null)

      props.history.push('/userhome')

    } catch (error) {
      if(error.code === "auth/user-not-found"){
        setError("Usuario o contraseña no encontrado")
      } 
      if(error.code === 'auth/wrong-password'){
        setError('Usuario o contraseña incorrecta')
      }      
    }

  }, [email, pass, props.history])

  return (
    <div>
      <h3>Login</h3>
      <hr />
      <div>
        <form onSubmit={login}>
          {
            error && (
              <div>
                {error}
              </div>
            )
          }
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
          <button type="submit">Ingresa</button>
        </form>
      </div>
    </div>
  );
};


export default withRouter(LoginUser);
