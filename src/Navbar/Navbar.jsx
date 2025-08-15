import React from 'react';
import "../App.css"
import { Link,NavLink } from 'react-router-dom';
function Navbar() {
    return <React.Fragment>
<nav className="navbar navbar-expand-lg basic-color   p-3">
  <div className="container d-flex justify-content-between">
    <NavLink className="navbar-brand text-white  " to="/"><h1>START FRAMEWORK</h1></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse " id="navbarText">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          
          <NavLink className="nav-link text-white  fw-blod     " aria-current="page" to="/about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white  fw-blod  " to="portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white  fw-blod  " to="contact">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </React.Fragment>
    
}

export default Navbar
