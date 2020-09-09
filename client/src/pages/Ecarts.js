import React , {Fragment} from 'react';
import Nav from "./includes/Nav";
import UserParams from "./includes/UserParams";
import AlertUser from "./AlertUser";

const Ecarts = () =>
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
                <div class="name">écarts</div>
              </div>
              <div class="text-right admin">
                {/* Boutons Params haut droite du user */}
                <UserParams/>
                {/* Fin Boutons Params haut droite du user */}
              </div>
            </div>
          </div>
          <div class="block-rosie block-top-btn encart-top row">
            <div class="col-md-10">
              <button class="button-blue blue-filter">Filtrer</button>
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
            <div class="col-md-2 block-bt"><button class="change-bt"> Visualiser le graphique</button><button class="button-grey export"> Exporter</button></div>
          </div>
          <div class="">
            <ul class="row list-blue">
              <li class="col-md-1"></li>
              <li class="col-md-2">Date</li>
              <li class="col-md-2 ">Réalisé (€)</li>
              <li class="col-md-1">Prévisionnel (€)</li>
              <li class="col-md-1">Écart (€)</li>
              <li class="col-md-1">% de l’écart</li>
              <li class="col-md-1">% total</li>
              <li class="col-md-3">Commentaire</li>
            </ul>
          </div>
          <div class="block-rosie padding-left row">
            <div class="col-md-12">
              <div class="accordion blue accordeon-encart" id="accordionExamplebig">
                <div class="card">
                  <div class="card-header" id="headingOnebig">
                    <h2 class="mb-0">
                      <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOnebig" aria-expanded="true" aria-controls="collapseOnebig">
                        Agoa
                      </button>
                    </h2>
                  </div>

                  <div id="collapseOnebig" class="collapse show" aria-labelledby="headingOnebig" data-parent="#accordionExamplebig">
                    <div class="card-body">
                      <div class="accordion" id="accordionExample">
                        <div class="card z-depth-0 bordered">
                          <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                              <ul class="row">
                                <li class="fleche col-md-1 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"></li>
                                <li class="col-md-2 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> <ul class="list-date"><li><span>Mars</span></li><li><span>2020</span></li></ul></li>
                                <li class="col-md-2 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>18 365,45</span></li>
                                <li class="col-md-1 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>5 000</span></li>
                                <li class="col-md-1 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span class="orange">13 365,45</span></li>
                                <li class="col-md-1 btn btn-link collapsed"  data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span class="orange">100</span></li>
                                <li class="col-md-1 btn btn-link collapsed"  data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>100</span></li>
                                <li class="col-md-3 bt-openbtn btn-link collapsed text-right"  data-toggle="collapse"><span>Ajout de plus de de ser...</span><button class="eye" type="button" data-toggle="modal" data-target="#exampleModal"></button></li>
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
                                        Realise                          <td headers=" ">0,00</td>
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
                                <li class="fleche col-md-1 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"></li>
                                <li class="col-md-2 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> <ul class="list-date"><li><span>Mars</span></li><li><span>2020</span></li></ul></li>
                                <li class="col-md-2 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>18 365,45</span></li>
                                <li class="col-md-1 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>5 000</span></li>
                                <li class="col-md-1 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span class="orange">13 365,45</span></li>
                                <li class="col-md-1 btn btn-link collapsed"  data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span class="orange">100</span></li>
                                <li class="col-md-1 btn btn-link collapsed"  data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>100</span></li>
                                <li class="col-md-3 bt-openbtn btn-link collapsed text-right"  data-toggle="collapse"><span>Ajout de plus de de ser...</span><button class="eye" type="button" data-toggle="modal" data-target="#exampleModal"></button></li>
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
                                    <div><button><img src="img/bt-changesvg"/></button></div>
                                    <div><button><img src="img/bt-sgsvg"/></button></div>
                                    <div><button><img src="img/bt-deletesvg"/></button></div>
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
                                <li class="fleche col-md-1 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"></li>
                                <li class="col-md-2 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> <ul class="list-date"><li><span>Mars</span></li><li><span>2020</span></li></ul></li>
                                <li class="col-md-2 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>18 365,45</span></li>
                                <li class="col-md-1 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>5 000</span></li>
                                <li class="col-md-1 btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span class="orange">13 365,45</span></li>
                                <li class="col-md-1 btn btn-link collapsed"  data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span class="orange">100</span></li>
                                <li class="col-md-1 btn btn-link collapsed"  data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>100</span></li>
                                <li class="col-md-3 bt-openbtn btn-link collapsed text-right"  data-toggle="collapse"><span>Ajout de plus de de ser...</span><button class="eye" type="button" data-toggle="modal" data-target="#exampleModal"></button></li>
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
                                    <div><button><img src="img/bt-changesvg"/></button></div>
                                    <div><button><img src="img/bt-sgsvg"/></button></div>
                                    <div><button><img src="img/bt-deletesvg"/></button></div>
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
                <div class="card">
                  <div class="card-header" id="headingTwobig">
                    <h2 class="mb-0">
                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwobig" aria-expanded="false" aria-controls="collapseTwobig">
                        Collapsible Group Item #2
                      </button>
                    </h2>
                  </div>
                  <div id="collapseTwobig" class="collapse" aria-labelledby="headingTwobig" data-parent="#accordionExamplebig">
                    <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThreebig">
                    <h2 class="mb-0">
                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThreebig" aria-expanded="false" aria-controls="collapseThreebig">
                        Collapsible Group Item #3
                      </button>
                    </h2>
                  </div>
                  <div id="collapseThreebig" class="collapse" aria-labelledby="headingThreebig" data-parent="#accordionExamplebig">
                    <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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

export default Ecarts;
