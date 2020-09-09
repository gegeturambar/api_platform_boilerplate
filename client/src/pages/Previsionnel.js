import React , {Fragment} from 'react';
import Nav from "./includes/Nav";
import UserParams from "./includes/UserParams";
import AlertUser from "./AlertUser";

const Previsionnel = () =>
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
              <div class="Name-page">Historique des modifications</div>
            </div>
            <div class="text-right admin">
              {/* Boutons Params haut droite du user */}
              <UserParams/>
              {/* Fin Boutons Params haut droite du user */}
            </div>
          </div>
        </div>
        <div class="block-rosie block-top-btn row">
          <div class="col-md-7">
            <form>
              <div class="multiselect">
                <div class="selectBox" onclick="showCheckboxes()">
                  <select>
                    <option>PANDA DJ</option>
                  </select>
                  <div class="overSelect"></div>
                </div>
                <div id="checkboxes">
                  <label for="one">
                    <input type="checkbox" name="fordCheckBox" id="Ford" value="Ford"/><label for="Ford"></label>
                      <span /*style = "position: relative;
                        top: -0.6vh;
                        margin: 1.3vh;"*/>Toutes les applications</span></label>
                  <label for="two">
                    <input type="checkbox" name="fordCheckBox" id="Ford" value="Ford"/><label for="Ford"></label><span /*style = "position: relative;
                      top: -0.6vh;
                      margin: 1.3vh;"*/>Second checkbox</span></label>
                  <label for="three">
                    <input type="checkbox" name="fordCheckBox" id="Ford" value="Ford"/><label for="Ford"></label><span /*style = 'position: relative;
                      top: -0.6vh;
                      margin: 1.3vh;'*/>Third checkbox</span></label>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-3"><button class="change-bt">Modifier mon prévisionnel</button></div>
          <div class="col-md-2"><button class="rea-bt">Réinitialiser</button></div>
        </div>
        <div class="block-rosie block-top-btn row">
          <div class="col-md-12">
            <button class="btn btn-primary btn-create" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Créer
            </button>
            <div class="collapse collapse-create" id="collapseExample">
              <div class="card card-body create">
                <ul>
                  <li><button type="button" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                  </button></li>
                  <li><button type="button" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                  </button></li>
                  <li><button type="button" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                  </button></li>
                  <li><button type="button" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                  </button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="block-rosie padding-left row">
          <div class="col-md-12">
            <div class="accordion" id="accordionExample">
              <div class="card z-depth-0 bordered">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <ul class="row">
                      <li class="fleche col-md-1 btn btn-link collapsed" data-toggle="collapse"
                          data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"></li>
                      <li class="integ col-md-2 btn btn-link collapsed" data-toggle="collapse"
                          data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>INTEG-Maître</span></li>
                      <li class="server col-md-2 btn btn-link collapsed" data-toggle="collapse"
                          data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>3 serveurs</span></li>
                      <li class="col-md-3 btn btn-link collapsed"  data-toggle="collapse"
                          data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>% 0 OTP</span></li>
                      <li class="col-md-2 bt-open"><button >Clé de répartition</button></li>
                      <li class="col-md-2 btn btn-link collapsed date-select change-date" data-toggle="collapse"
                          data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><span>Modifier le <b>4/01/2022</b></span></li>
                    </ul>
                    <div class="bt-select text-center">
                      <div><button><img src="img/bt-change.svg"/></button></div>
                      <div><button><img src="img/bt-delete.svg"/></button></div>
                    </div>
                  </h5>
                </div>
                <div id="collapseOne" class="collapse" aria-labelledby="headingOne"
                     data-parent="#accordionExample">
                  <div class="card-body">
                    <div class="row block-serve">
                      <div></div>
                      <div class="col-md-10">ECXHRSF</div>
                      <div class="col-md-2">
                        <div class="bt-select text-center">
                          <div><button><img src="img/bt-change.svg"/></button></div>
                          <div><button><img src="img/bt-sg.svg"/></button></div>
                          <div><button><img src="img/bt-delete.svg"/></button></div>
                        </div>
                      </div>
                    </div>
                    <div class="row block-serve">
                      <div></div>
                      <div class="col-md-10">ECXHRSF</div>
                      <div class="col-md-2">
                        <div class="bt-select text-center">
                          <div><button><img src="img/bt-change.svg"/></button></div>
                          <div><button><img src="img/bt-sg.svg"/></button></div>
                          <div><button><img src="img/bt-delete.svg"/></button></div>
                        </div>
                      </div>
                    </div>
                    <div class="row block-serve">
                      <div></div>
                      <div class="col-md-10">ECXHRSF</div>
                      <div class="col-md-2">
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
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <ul class="row">
                      <li class="fleche col-md-1 btn btn-link collapsed" data-toggle="collapse"
                          data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"></li>
                      <li class="integ col-md-2 btn btn-link collapsed" data-toggle="collapse"
                          data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><span>INTEG-Maître</span></li>
                      <li class="server col-md-2 btn btn-link collapsed" data-toggle="collapse"
                          data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><span>3 serveurs</span></li>
                      <li class="col-md-3 btn btn-link collapsed" data-toggle="collapse"
                          data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><span>% 0 OTP</span></li>
                      <li class="col-md-2 bt-open"><button >Clé de répartition</button></li>
                      <li class="col-md-2 btn btn-link collapsed date-select change-date" data-toggle="collapse"
                          data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><span>Modifier le <b>4/01/2022</b></span></li>
                    </ul>
                    <div class="bt-select text-center">
                      <div><button><img src="img/bt-change.svg"/></button></div>
                      <div><button><img src="img/bt-delete.svg"/></button></div>
                    </div>
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
                      <li class="fleche col-md-1 btn btn-link collapsed" data-toggle="collapse"
                          data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"></li>
                      <li class="integ col-md-2 btn btn-link collapsed" data-toggle="collapse"
                          data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><span>INTEG-Maître</span></li>
                      <li class="server col-md-2 btn btn-link collapsed" data-toggle="collapse"
                          data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><span>3 serveurs</span></li>
                      <li class="col-md-3 btn btn-link collapsed" data-toggle="collapse"
                          data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><span>% 0 OTP</span></li>
                      <li class="col-md-2 bt-open"><button >Clé de répartition</button></li>
                      <li class="col-md-2 btn btn-link collapsed date-select delete-date"data-toggle="collapse"
                          data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><span>Démentelé le <b>04/01/2022</b></span></li>
                    </ul>
                    <div class="bt-select text-center">
                      <div><button><img src="img/bt-change.svg"/></button></div>
                      <div><button><img src="img/bt-delete-grey.svg"/></button></div>
                    </div>
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

    <AlertUser/>
    </Fragment>
  )
}

export default Previsionnel;
