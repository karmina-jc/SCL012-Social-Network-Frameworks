import React from "react";
import { Link } from "react-router-dom";
import Favorite from './images/heart.png'
import Logout from './images/logout.png'
import Search from './images/lupaicon.png'
import Home from './images/homeIcon.png'
import MyWorks from './images/portfolioIcon.png'
import './navbar.css'

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/userhome">
            <li>
              <a href="/userhome">Inicio</a>
              <img  className="navIcon" src={Home} alt=""/>
            </li>
          </Link>
          <Link to="/myworks">
            <li>
              <a href="/myworks">Mis Trabajos</a>
              <img className="navIcon" src={MyWorks} alt=""/>
            </li>
          </Link>
          <Link to="/favorites">
            <li>
              <a href="/favorites">Favoritos</a>
              <img className="navIcon" src={Favorite} alt=""/>
            </li>
          </Link>
          <Link to="/search"><img className="navIcon" src={Search} alt=""/>
            <li>
              <input type="search" placeholder="Buscar"/>            
            </li>
          </Link>
          <Link to="/">
            <li>
              <img className="navIcon" src={Logout} alt=""/><a href="/">Cerrar Seción</a>            
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
