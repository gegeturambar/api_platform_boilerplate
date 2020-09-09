import React , {Fragment} from 'react';
import AlertUser from "./AlertUser";
import Nav from "./includes/Nav";
import UserParams from "./includes/UserParams";

const Realise = () =>
{
  return (
    <Fragment>
      <div class="row block-home">
        {/* Navigation gauche */}
        <Nav/>
        {/* Fin Navigation gauche */}
        <div class="col-md-11 block-right-home">
          <div class="header row">
            <div class="col-md-12 text-center">
              <div class="Name-service">
                <div class="name">Mon réalisé</div>
              </div>
              <div class="text-right admin">
                {/* Boutons Params haut droite du user */}
                <UserParams/>
                {/* Fin Boutons Params haut droite du user */}
              </div>
            </div>
          </div>
          <div class="block-rosie block-top-btn encart-top row">
            <div class="col-md-12">
              <button class="button-blue blue-filter">Filter</button>
              <div class="ecart-filter">
                <ul>
                  <li><button>x</button> <b>OTP :</b> E633/PO2210/E-D9</li>
                  <li><button>x</button> <b>OTP :</b> E633/PO2210/E-D9</li>
                  <li><button>x</button> <b>OTP :</b> E633/PO2210/E-D9</li>
                </ul>
                <ul class="text-right">
                  <li><a class="orange" href="#">Réinitialiser</a></li>
                  <li><a href="#">Modifier mes filtres</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="">
            <ul class="row list-blue">
              <li class="col-md-2">Application</li>
              <li class="col-md-2">clone</li>
              <li class="col-md-2">Compléxité</li>
              <li class="col-md-3">intitulé</li>
              <li class="col-md-1">valeur</li>
              <li class="col-md-2">cout annuel non chargé (€)</li>
            </ul>
          </div>
          <div class="block-rosie padding-left row">
            <div class="col-md-12">
              <div class="accordion blue accordeon-encart" id="accordionExamplebig">
                <div class="card">
                  <div class="card-header" id="headingOnebig">

                  </div>

                  <div id="collapseOnebig" class="collapse show" aria-labelledby="headingOnebig" data-parent="#accordionExamplebig">
                    <div class="card-body">
                      <div class="accordion" id="accordionExample">
                        <div class="card z-depth-0 bordered">
                          <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                              <ul class="row">
                                <li class="col-md-2 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">PANDA-IJ</li>
                                <li class="col-md-2 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>PROD/Maître</span></li>
                                <li class="col-md-2 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span><i>Non renseigné</i></span></li>
                                <li class="col-md-3 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>APH_Pilotage_Applicatif_Premium</span></li>
                                <li class="col-md-1 btn btn-link collapsed"  data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span class="orange">2 432</span></li>
                                <li class="col-md-2 bt-openbtn btn-link collapsed"  data-toggle="collapse"><span>23 765</span></li>
                              </ul>
                            </h5>
                          </div>
                          <div id="collapseOne" class="collapse" aria-labelledby="headingOne"
                               data-parent="#accordionExample">
                            <div class="card-body">
                              <div class="block-table-rosie-bottom">
                                <div class="table-rosie">
                                  <div>
                                    <table>
                                      <thead>
                                      <tr>
                                        <th id="table-service">Offre</th>
                                        <th id="">Tarif annuel (€)</th>
                                        <th id="">Cumulé réalisé (€)</th>
                                        <th id="">Cumulé  prévisionnel (€)</th>
                                        <th id="">Cumulé écart</th>
                                        <th>Cumulé % de l’écart</th>
                                        <th>Cumulé UO réalisé</th>
                                        <th>Cumulé UO prévisionnel</th>
                                        <th>Redressement</th>
                                      </tr>
                                      </thead>
                                      <tbody>
                                      <tr>
                                        <td id="table-service">Bigdata_Stockage</td>
                                        <td headers=" ">0,20</td>
                                        <td headers=" ">0,00</td>
                                        <td headers=" ">6,00</td>
                                        <td headers=" ">6,11</td>
                                        <td headers=" ">100</td>
                                        <td headers=" ">0,00</td>
                                        <td headers=" ">100</td>
                                        <td headers=" ">0,00</td>
                                      </tr>
                                      <tr >
                                        <td id="table-service">STK_SAN_Classic2019</td>
                                        <td headers=" ">0,20</td>
                                        <td headers=" ">0,00</td>
                                        <td headers=" ">6,00</td>
                                        <td headers=" ">6,11</td>
                                        <td headers=" ">100</td>
                                        <td headers=" ">0,00</td>
                                        <td headers=" ">100</td>
                                        <td headers=" ">0,00</td>
                                      </tr>
                                      <tr>
                                        <td id="table-service">SVG_Standard_Classic</td>
                                        <td headers=" ">0,20</td>
                                        <td headers=" ">0,00</td>
                                        <td headers=" ">6,00</td>
                                        <td headers=" ">6,11</td>
                                        <td headers=" ">100</td>
                                        <td headers=" ">0,00</td>
                                        <td headers=" ">100</td>
                                        <td headers=" ">0,00</td>
                                      </tr>
                                      <tr>
                                        <td id="table-service">SVH_Mutualise_AIX_Historique</td>
                                        <td headers=" ">0,20</td>
                                        <td headers=" ">0,00</td>
                                        <td headers=" ">6,00</td>
                                        <td headers=" ">6,11</td>
                                        <td headers=" ">100</td>
                                        <td headers=" ">0,00</td>
                                        <td headers=" ">100</td>
                                        <td headers=" ">0,00</td>
                                      </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card z-depth-0 bordered">
                          <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                              <ul class="row">
                                <li class="col-md-2 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">PANDA-IJ</li>
                                <li class="col-md-2 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>PROD/Maître</span></li>
                                <li class="col-md-2 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span><i>Non renseigné</i></span></li>
                                <li class="col-md-3 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>APH_Pilotage_Applicatif_Premium</span></li>
                                <li class="col-md-1 btn btn-link collapsed"  data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span class="orange">2 432</span></li>
                                <li class="col-md-2 bt-openbtn btn-link collapsed"  data-toggle="collapse"><span>23 765</span></li>
                              </ul>
                            </h5>
                          </div>
                          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body">
                              <div class="row block-serve">
                                <div></div>
                                <div class="col-md-9">ECXHRSF</div>
                                <div class="col-md-3">
                                  <div class="bt-select text-center">
                                    <div><button><img src="img/bt-change.svg"/></button></div>
                                    <div><button><img src="img/bt-sg.svg"/></button></div>
                                    <div><button><img src="img/bt-delete.svg"/></button></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card z-depth-0 bordered">
                          <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                              <ul class="row">
                                <li class="col-md-2 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">PANDA-IJ</li>
                                <li class="col-md-2 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>PROD/Maître</span></li>
                                <li class="col-md-2 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span><i>Non renseigné</i></span></li>
                                <li class="col-md-3 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>APH_Pilotage_Applicatif_Premium</span></li>
                                <li class="col-md-1 btn btn-link collapsed"  data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span class="orange">2 432</span></li>
                                <li class="col-md-2 bt-openbtn btn-link collapsed"  data-toggle="collapse"><span>23 765</span></li>
                              </ul>
                            </h5>
                          </div>
                          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div class="card-body">
                              <div class="row block-serve">
                                <div></div>
                                <div class="col-md-9">ECXHRSF</div>
                                <div class="col-md-3">
                                  <div class="bt-select text-center">
                                    <div><button><img src="img/bt-change.svg"/></button></div>
                                    <div><button><img src="img/bt-sg.svg"/></button></div>
                                    <div><button><img src="img/bt-delete.svg"/></button></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default Realise;
