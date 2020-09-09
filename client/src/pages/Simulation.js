import React , {Fragment} from 'react';
import Nav from "./includes/Nav";
import UserParams from "./includes/UserParams";
import AlertUser from "./AlertUser";
const Simulation = () =>
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
                <div className="name">Simulation Budgétaire</div>
              </div>
              <div className="text-right admin">
                {/* Boutons Params haut droite du user */}
                <UserParams/>
                {/* Fin Boutons Params haut droite du user */}
              </div>
            </div>
          </div>
          <div className="row mt-5 block-bt  list-block-border">
            <div className="col-md-2">
              <button className="button-white">Importer</button>
            </div>
            <div className="col-md-2">
              <button className="button-grey Export">Exporter</button>
            </div>
            <div className="col-md-5">
              <button className="button-orange">Réinitialiser la simulation</button>
            </div>
            <div className="col-md-3 text-right">
              <button className="bt-green">Sauvegarder</button>
            </div>
          </div>
          <div className="block-rosie padding-left row">
            <div className="col-md-3">
              <button className="button-white w-100">Envoyer vers le prévisionnel</button>
              <div className="block-border select-server">
                <h4>L’application</h4>
                <ul className="list-block-border">
                  <li><select value="Sélectionner une application">
                    <option></option>
                  </select></li>
                  <li className="text-center cl-interlude">OU</li>
                  <li>
                    <button className="button-white w-100">Créer une nouvelle application</button>
                  </li>
                </ul>
                <h4>L’offres</h4>
                <ul>
                  <li className="list-block-border">
                    <button className="button-white w-100">Ajouter des offres</button>
                  </li>
                </ul>
                <h4>Prestation</h4>
                <ul className="row list-block-border">
                  <li className="col-md-10"><select>
                    <option></option>
                  </select></li>
                  <li className="col-md-2 nopadding">
                    <button className="button-white bt-more">+</button>
                  </li>
                </ul>
                <div className="block-charge">
                  <h4>Charge appliquée</h4>
                  <ul className="row">
                    <li className="col-md-5 block-border">Hors-charge (HC) - 0%</li>
                    <li className="col-md-2"></li>
                    <li className="col-md-5 block-border-green">Charge 16%</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div>
                <div className="block-border">
                  <div className="row">
                    <div className="col-md-6 row">
                      <div className="col-md-1"><input type="checkbox" name="fordCheckBox" id="Ford" value="Ford"/><label for="Ford"></label></div>
                      <div className="col-md-11">Tout sélectionner</div>
                    </div>
                    <div className="col-md-6 text-right"><input type="text" className="search-rosie"
                                                                placeholder="rechercher une offre" value=""/></div>
                  </div>
                  <div className="row block-budgetaire">
                    <div className="col-md-1 text-center"><span/*style="position: relative;top:6vh;"*/><input
                      type="checkbox" name="fordCheckBox" id="Ford" value="Ford"/><label htmlFor="Ford"></label></span>
                    </div>
                    <div className="col-md-11">
                      <div className="block-simulation">
                        <div className="title-simulation">APH_PAT_Classic_2020</div>
                        <button className="close-simulation">x</button>
                        <ul className="row">
                          <li className="col-md-3"><span className="s-blue">IES1</span></li>
                          <li className="col-md-3"><span className="d-inline-block">UO - Go - H/J</span> <input
                            className="otp" value="5" type="text"/></li>
                          <li className=" col-md-5 calendar-block">
                            <div className="calendar-de">De <img src="img/calendar_icon.svg"/>
                              <div>Fevr.</div>
                              <div>2020</div></div>
                            <div className="calendar-de">A <img src="img/calendar_icon.svg"/>
                              <div>Fevr.</div>
                              <div>2020</div></div>
                          </li>
                          <li className=" col-md-1">Euros <span className="d-block">2043</span></li>
                        </ul>
                      </div>
                      <div className="text-right block-simulation-comment">Afficher commentaire</div>
                      <div className="block-simulation-budget text-right">Sous-total (APH) (avec charge 16%)
                        <span> 3 144,35 €</span></div>
                    </div>
                  </div>
                  <div className="row block-budgetaire">
                    <div className="col-md-1 text-center"><span /*style="position: relative;top:6vh;"*/><input
                      type="checkbox" name="fordCheckBox" id="Ford" value="Ford"/><label htmlFor="Ford"></label></span>
                    </div>
                    <div className="col-md-11">
                      <div className="block-simulation">
                        <div className="title-simulation">APH_PAT_Classic_2020</div>
                        <button className="close-simulation">x</button>
                        <ul className="row">
                          <li className="col-md-3"><span className="s-blue">IES1</span></li>
                          <li className="col-md-3"><span className="d-inline-block">UO - Go - H/J</span>
                            <div className="otp">
                              <button className="calcul" type="button" data-toggle="modal"
                                      data-target="#exampleModal-p2"></button>
                              5
                            </div>
                          </li>
                          <li className=" col-md-5 calendar-block">
                            <div className="calendar-de">De <img src="img/calendar_icon.svg"/>
                              <div>Fevr.</div>
                              <div>2020</div></div>
                            <div className="calendar-de">A <img src="img/calendar_icon.svg"/>
                              <div>Fevr.</div>
                              <div>2020</div></div>
                          </li>
                          <li className=" col-md-1">Euros <span className="d-block">2043</span></li>
                        </ul>
                      </div>
                      <div className="text-right block-simulation-comment">Afficher commentaire</div>
                    </div>
                  </div>
                  <div className="row block-budgetaire">
                    <div className="col-md-1 text-center"><span /*style="position: relative;top:6vh;"*/><input
                      type="checkbox" name="fordCheckBox" id="Ford" value="Ford"/><label htmlFor="Ford"></label></span>
                    </div>
                    <div className="col-md-11">
                      <div className="block-simulation">
                        <div className="title-simulation">APH_PAT_Classic_2020</div>
                        <button className="close-simulation">x</button>
                        <ul className="row">
                          <li className="col-md-3"><span className="s-blue">IES1</span></li>
                          <li className="col-md-3"><span className="d-inline-block">UO - Go - H/J</span> <input
                            className="otp" value="5" type="text"/></li>
                          <li className=" col-md-5 calendar-block">
                            <div className="calendar-de">De <img src="img/calendar_icon.svg"/>
                              <div>Fevr.</div>
                              <div>2020</div></div>
                            <div className="calendar-de">A <img src="img/calendar_icon.svg"/>
                              <div>Fevr.</div>
                              <div>2020</div></div>
                          </li>
                          <li className=" col-md-1">Euros <span className="d-block">2043</span></li>
                        </ul>
                      </div>
                      <div className="text-right block-simulation-comment">Afficher commentaire</div>
                    </div>
                  </div>
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

export default Simulation;
