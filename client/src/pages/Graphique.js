import React , {Fragment} from 'react';
import Nav from "./includes/Nav";
import UserParams from "./includes/UserParams";
import AlertUser from "./AlertUser";

const Graphique = () =>
{
  return (
    <Fragment>
      <div class="row block-home">
        {/* Navigation gauche */}
        <Nav/>
        {/* Fin Navigation gauche */}
        <div className="col-md-11 block-right-home">
          <div className="header row">
            <div className="col-md-12 text-center">
              <div className="Name-service">
                <div className="name">Graphique</div>
              </div>
              <div className="text-right admin">
                {/* Boutons Params haut droite du user */}
                <UserParams/>
                {/* Fin Boutons Params haut droite du user */}
              </div>
            </div>
          </div>
          <div className="block-rosie block-top-btn encart-top row">
            <div className="col-md-12">
              <button className="button-blue blue-filter">Filter</button>
              <div className="ecart-filter">
                <ul>
                  <li>
                    <button>x</button>
                    <b>OTP :</b> E633/PO2210/E-D9
                  </li>
                  <li>
                    <button>x</button>
                    <b>OTP :</b> E633/PO2210/E-D9
                  </li>
                  <li>
                    <button>x</button>
                    <b>OTP :</b> E633/PO2210/E-D9
                  </li>
                </ul>
                <ul className="text-right">
                  <li><a className="orange" href="#">Réinitialiser</a></li>
                  <li><a href="#">Modifier mes filtres</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="block-rosie padding-left row">
            <div className="col-md-12">
              <div className="graph page-graph">
                <h2>Réalisé/Prévisionnel sur l’année en cours</h2>
                <ul>
                  <li className="color-real"><span></span>Réalisé</li>
                  <li className="color-prev"><span></span>Prévisionnel</li>
                </ul>
                <canvas id="canvas"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AlertUser/>
    </Fragment>
  )
}

export default Graphique;
