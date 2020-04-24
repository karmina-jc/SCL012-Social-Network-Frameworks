import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import Favorite from './images/heart.png'
import Logout from './images/logout.png'
import Search from './images/lupaicon.png'
import Home from './images/homeIcon.png'
import MyWorks from './images/portfolioIcon.png'
import './navbar.css'

function Navbar() {
=======
import { firebase } from '../config/firebase';
import { Link, withRouter } from "react-router-dom";
import Favorite from "./images/heart.png";
import Logout from "./images/logout.png";
import Search from "./images/lupaicon.png";
import Home from "./images/homeIcon.png";
import MyWorks from "./images/portfolioIcon.png";
import "./navbar.css";

function Navbar(props) {
  const logout = () => {
    if (props.user) {
      firebase.auth().signOut()
        .then(() => {
          props.history.push("/");
        });
    }
  };

>>>>>>> 14111f0bb05621445f3378fa6420c53c1e0446b8
  return (
    <div>
      <nav>
        <ul>
<<<<<<< HEAD
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
=======
          <div className="browserNav">
            <li>
              <Link to="/userhome">Inicio</Link>
            </li>
            <li>
              <Link to="/myworks"> Mis trabajos</Link>
            </li>
            <li>
              <Link to="/favorites">Favoritos</Link>
            </li>
            <li>
              <Link to="/search">
                <input type="search" placeholder="Buscar" />
              </Link>
            </li>
            <li>
              <Link to="/"
                onClick={() => logout()}>
                Cerrar Seción
              </Link>
            </li>
          </div>
          <div className="mobileNav">
            <li>
              <Link to="/userhome">
                <img className="navIcon" src={Home} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/myworks">
                <img className="navIcon" src={MyWorks} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/favorites">
                <img className="navIcon" src={Favorite} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/search">
                <img className="navIcon" src={Search} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img className="navIcon" src={Logout} alt="" />
              </Link>
            </li>
          </div>
>>>>>>> 14111f0bb05621445f3378fa6420c53c1e0446b8
        </ul>
      </nav>
    </div>
  );
}

<<<<<<< HEAD
export default Navbar;
=======
export default withRouter(Navbar);
>>>>>>> 14111f0bb05621445f3378fa6420c53c1e0446b8
