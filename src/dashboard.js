import 'bulma/css/bulma.min.css';
import React from 'react';
import './dashboard.css';
import Logo from "/home/nedfalkor/react-search-bar-main/src/kalyzee.jpg";


const Dashboard = () => {
   
    return (

    <div id="dashboard">
        
          <aside id="banner">
            
            <div id='image'>

            <figure></figure>

            <br></br>

            <img alt='Logo' id='logo'src={Logo}/>

            <br></br>

          </div>

            <div id='spacetitle'>

            <p><h1 id='title'><bolder><u><big>Organisation des tests</big></u></bolder></h1></p>

            </div>

          <br></br>

            <p id='list'>

                <li> * - Tests de base, sans besoin de problème rencontré ou d'accessoires </li>

                  <br></br>

                <li> ** - Tests de base, nécessitant des accessoires </li>

                  <br></br>

                <li> *** - Tests Techniques, nécessitant quelques connaissances ou supports </li>

                  <br></br>

                  <hr class='solid'/>

                <h3><i> Vous trouverez ici la liste des tests basiques de niveau 1. Pour des tests plus avancés, écrivez le nom du test, son ID ou son niveau.</i></h3>
                <h3><i>Pour voir la liste complète des tests, écrivez 'Test' ou '*'</i></h3>

                <hr class="solid"/>

                <h3><b>/!\ Si aucun de ces tests correspondent à votre problème, veuillez aller dans l'espace commentaire pour demander notre protocole "Kast Reboot" /!\</b></h3>

            </p>

            </aside>
       
       </div> 
     
    );        
    };

export default Dashboard;