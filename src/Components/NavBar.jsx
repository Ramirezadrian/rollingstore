import React from "react";
import CartWidget from "./cardWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from './cartContext/CartContext';

const NavBar =() => {

  const {cantidadTotal} = useContext(CartContext);

return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <Link className="navbar-brand" to='/'>RollingStore</Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Link</a>
        </li> */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/category/musculacion">Musculacion</Link>
            <Link className="dropdown-item" to="/category/complementos">Complementos</Link>
            <Link className="dropdown-item" to="/category/accesorios">Accesorios</Link>
            
            
          </ul>
        </li>
      
      </ul>
      <Link to ="/cart"><CartWidget/></Link>
      <div>
        <span>{cantidadTotal}</span>
      </div>
    </div>
  </div>
</nav>
)

}

export default NavBar