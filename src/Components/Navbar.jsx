import React from "react";
import './navbar.css'

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/userhome">Inicio</a>
          </li>
          <li>
            <a href="#">Mis Trabajos</a>
          </li>
          <li>
            <a href="#">Favoritos</a>
          </li>
          <li>
            <input type="search" placeholder="Buscar"/>
          </li>
          <li>
            <a href="#">Cerrar Seción</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
