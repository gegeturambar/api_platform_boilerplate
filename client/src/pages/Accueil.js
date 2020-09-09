import React, {Fragment, useContext, useEffect, useState} from 'react';
import Nav from "./includes/Nav";
import UserParams from "./includes/UserParams";
import AlertUser from "./AlertUser";
import {ENTRYPOINT} from "../config/entrypoint";
import {authContext} from "../context/AuthContext";
import axios from "axios";

const Accueil = () => {
  const [error, setError]         = useState(null);
  const [updated, setUpdated]     = useState(null);
  const { auth }                  = useContext(authContext);
  const [userId, setUserId]       = useState();
  // !! : Equivaut à componentDidMount dans un classe, mais ici on est dans un hook.
  useEffect(() =>{
    document.body.setAttribute("id", "home");
console.log(auth);
  }, []);


  return (
    <Fragment>
      <div className="row block-home">
        {/* Navigation gauche */}
        <Nav/>
        {/* Fin Navigation gauche */}
        <div className="col-md-11 block-right-home">
          <div className="header row">
            <div className="col-md-12 text-center">
              <div className="Name-service">
                <div className="name">Panda DJ</div>
              </div>
              <div className="text-right admin">
                {/* Boutons Params haut droite du user */}
                <UserParams/>
                {/* Fin Boutons Params haut droite du user */}
              </div>
            </div>
          </div>
          <div className="block-rosie row">
            <a href="#" className="col-md-2 bt-projet active"><span>Panda-IJ</span></a>
            <a href="#" className="col-md-2 bt-projet"><span>Apolo</span></a>
            <a href="#" className="col-md-2 bt-projet"><span>Bao services clients fournisseurs</span></a>
            <a href="#" className="col-md-2 bt-projet"><span>eclair</span></a>
            <a href="#" className="col-md-2 bt-projet"><span>CAMAE / CNM GAZ</span></a>
          </div>
          <div className="block-rosie row">
            <div className="col-md-7 graph">
              <h2>Réalisé/Prévisionnel sur l’année en cours</h2>
              <ul>
                <li className="color-real"><span></span>Réalisé</li>
                <li className="color-prev"><span></span>Prévisionnel</li>
              </ul>
              <canvas id="canvas"></canvas>
              <div className="bottom-graph">
                <button><b>Voir le graphique</b></button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="block-prevision">
                <div className="block-prevision-top orange">
                  <div className="money">
                    +1581£
                  </div>
                  <div className="ecart-money">Ecart > 20%</div>
                  <p>Votre écart est négatif, votre prévisionnel dépasse votre réalisé.</p>
                </div>
                <div className="detail-prevision text-center">
                  <div className="list-detail-prevision text-center">
                    <h3>Dernière modification Décembre</h3>
                    <ul className="text-left">
                      <li className="plus">4 Serveurs</li>
                      <li className="moins"> Autres chose</li>
                    </ul>
                    <button><b>Voir plus</b></button>
                  </div>
                  <button><b>Prévisionnel complet</b></button>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="block-rosie row">
            <div className="col-md-12">
              <div className="row button-rosie-page">
                <div className="col-md-6 nopadding">
                  <input placeholder="Rechercher" className="search-rosie" type="text"/>
                </div>
                <div className="col-md-6 text-right">
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 nopadding">
                  <section>
                    <div className="test green">
                      <div className="blockgreen text-center">
                        <div className="number">34<span>Applications</span></div>
                        <div className="ecart">écart = 0%</div>
                        <div className="languette">Voir Plus</div>
                      </div>
                      <div className="block-select text-center">
                        <ul>
                          <li>Application 1</li>
                          <li>Application 2</li>
                          <li>Application 3</li>
                          <li>Application 4</li>
                          <li>Application 5</li>
                          <li>Application 1</li>
                          <li>Application 2</li>
                          <li>Application 3</li>
                          <li>Application 4</li>
                          <li>Application 5</li>
                        </ul>
                      </div>
                    </div>
                    <div className="test greenclaire">
                      <div className="blockgreenclaire text-center">
                        <div className="number">34<span>Applications</span></div>
                        <div className="ecart">écart = 0%</div>
                        <div className="languette">Voir Plus</div>
                      </div>
                      <div className="block-select text-center">
                        <ul>
                          <li>Application 1</li>
                          <li>Application 2</li>
                          <li>Application 3</li>
                          <li>Application 4</li>
                          <li>Application 5</li>
                          <li>Application 1</li>
                          <li>Application 2</li>
                          <li>Application 3</li>
                          <li>Application 4</li>
                          <li>Application 5</li>
                        </ul>
                      </div>
                    </div>
                    <div className="test orange">
                      <div className="blockorange text-center">
                        <div className="number">34<span>Applications</span></div>
                        <div className="ecart">écart = 0%</div>
                        <div className="languette">Voir Plus</div>
                      </div>
                      <div className="block-select text-center">
                        <ul>
                          <li>Application 1</li>
                          <li>Application 2</li>
                          <li>Application 3</li>
                          <li>Application 4</li>
                          <li>Application 5</li>
                          <li>Application 1</li>
                          <li>Application 2</li>
                          <li>Application 3</li>
                          <li>Application 4</li>
                          <li>Application 5</li>
                        </ul>
                      </div>
                    </div>
                    <div className="test red">
                      <div className="blockred text-center">
                        <div className="number">34<span>Applications</span></div>
                        <div className="ecart">écart = 0%</div>
                        <div className="languette">Voir Plus</div>
                      </div>
                      <div className="block-select text-center">
                        <ul>
                          <li>Application 1</li>
                          <li>Application 2</li>
                          <li>Application 3</li>
                          <li>Application 4</li>
                          <li>Application 5</li>
                          <li>Application 1</li>
                          <li>Application 2</li>
                          <li>Application 3</li>
                          <li>Application 4</li>
                          <li>Application 5</li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AlertUser/>
    </Fragment>
  )
}

export default Accueil;
