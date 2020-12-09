import React from "react";
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav">

      <NavLink to="/" exact activeClassName='navActive' className="nav-item">
        Publicaciones
      </NavLink>

      <NavLink to="/publication/add" activeClassName='navActive' className="nav-item">
        Agregar Publicación
      </NavLink>
    </nav>
  );
};

export default Navigation;