import 'bulma/css/bulma.min.css';
import React, { useState, useEffect }from 'react';
import logo from './cropped-big.png';
import './comment.css';
import { BrowserRouter as Router} from 'react-router-dom';
import './returnNavbar';

const Comment = () => {
  
    return (

     <Router> 
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
      <a class="navbar-item has-text-info" target="_self" href="/">Liste des tests</a>
        <a class="navbar-item has-text-warning-dark" target="_self" href="/webcam">Testez votre webcam</a>
        <a class="navbar-item has-text-success" target ="_self" href="/Panopticon">Panopticon</a>
        <a class="navbar-item has-text-danger" rel="noreferrer" target ="_self" href="https://3wa.fr/">Site Officiel 3WA</a>
      </div>
    </div>
  </nav>
  <script src="burger.js"/>
</div>
          <div id="body"> 
          <br/>
        
                <form method="post" action="comment.php" >
      <div class="field is-white">
        <label id ='space' class="label has-text-white">Nom</label>
        <div class="control">
          <input class="input is-normal has-text-centered is-black" id="lastName"type="text" name='nom' placeholder="Entrez votre nom"/>
        </div>
      </div>
      
      <div class="field is-white">
        <label class="label has-text-white">Prénom</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-normal has-text-centered is-black" id="firstName"type="text" name='prenom' placeholder="Entrez votre prénom"/>
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>
      
      <div class="field is-white">
        <label class="label has-text-white">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-normal has-text-centered is-black" id="email" type="email" name='email' placeholder="Entrez votre adresse mail"/>
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
      </div>
<label class="label has-text-white">Votre Commentaire</label>
      <div class="field is-white">
        <label class="label has-text-white is-black"></label>
        <div class="control">
          <textarea class="textarea is-large has-text-centered" id ="comment" placeholder="Quel est votre problème ?"></textarea>
        </div>
      </div>
      <br/>
      <div id ='columns' class="columns">
      <div class="field is-grouped">
        <div class="control">
          <button id='submit' type="submit" value="OK" class="button is-rounded is-success">Valider</button>
        </div>

        <div class="control">
          <button id ='refuse' type="reset" value="reset" class="button is-rounded is-link">Réinitialiser</button>
        </div>
        
      </div>
      </div>
                </form>
      </div>
      <footer class="footer">
  <div class="content has-text-centered">
    <p>
    <img id='header' alt='' src={logo}></img>
    </p>
  </div>
</footer>
      </Router>
        
    );
};

export default Comment
    