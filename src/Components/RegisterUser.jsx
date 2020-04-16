import React from 'react'

const RegisterUser = () => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')

    return (
        <div>
            <h3>Registro</h3>
            <hr/>
            <div>
                <form>
                    <input 
                    type="text"
                    placeholder="Nombre"
                    />

                    <input 
                    type="email"
                    placeholder="correo Electronico"
                    onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                    type="password"
                    placeholder="Contraseña"
                    onChange={e => setEmail(e.target.value)}
                    />
                    <button>Acceder</button>
                </form>
            </div>

        </div>
    )
}

export default RegisterUser;