import React from 'react'
import Navbar from './Navbar';
import LogoBoceto from "./images/logo-boceto.png";
import Proxim from "./images/proximamente.png"
import "./myworks.css"


function MyWorks() {
    return (
        <div className="container">
            <div className="divLogo">
            <img className="logoHome" src={LogoBoceto} alt="" />
            </div>
            <Navbar />
            <img className="inComing" src={Proxim} alt="aviso de seccion proximamente habilitada"/>
        </div>
    )
}

export default MyWorks;
