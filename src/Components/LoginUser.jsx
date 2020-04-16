import React from 'react'

const LoginUser = () => {
    return (
        <div>
            <h3>Ingresa</h3>
            <hr/>
            <div>
                <form>
                    <input 
                    type="email"
                    placeholder="correo Electronico"

                    />
                    <input 
                    type="password"
                    placeholder="Contraseña"
                    
                    />
                    <button>Acceder</button>
                </form>
            </div>

        </div>
    )
}

export default LoginUser;
