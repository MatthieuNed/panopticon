import 'bulma/css/bulma.min.css';
import React from 'react';
import './navbar.css';

const Navbar = () =>{

 return(
   
   <div id="navbar has-text-centered">
  <nav class="navbar is-white has-shadow">

    <div class="navbar-brand">

      <a class="navbar-burger" id="burger">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
  
    <div class="navbar-menu" id="nav-links">

      <div class="navbar-end">
        <a class="navbar-item has-text-info" target="_self" href="/comment">Espace Commentaires</a>
        <a class="navbar-item has-text-warning-dark" target="_self" href="/webcam">Testez votre webcam</a>
        <a class="navbar-item has-text-success" target ="_self" href="/Panopticon">Panopticon</a>
        <a class="navbar-item has-text-danger" rel="noreferrer" target ="_self" href="https://3wa.fr/">Site Officiel 3WA</a>
      </div>
    </div>
  </nav>
  <script src="src/burger.js"/>
</div>
 );
};

export default Navbar;