import React from 'react';

const AlertUser = () =>
  (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel2"
         aria-hidden="true">
      <div className="modal-dialog modal-login" role="document">
        <div className="modal-content text-center">
          <div className="modal-header text-center w-100" /*style="background:#fff; border:none;"*/>
            <div className="row w-100">
              <div className="col-md-3"></div>
              <div className="col-md-6 import"><img /*style="margin-right:1vh;" src="img/information-w.svg"*//> Dernier
                import : 02/2019</div>
              <div className="col-md-3">
              </div>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>

          <div className="modal-body">
            <div className="row" /*style="margin-bottom:2vh"*/>
              <div className="col-md-6 text-left"><img /*style="position:relative; top:-1vh;" width="30vh"*/
                                                       src="img/Oval-user.svg"/> <span
                /*style="font-weight:bold;color: #001A70; position: relative; top:-1vh; left:1vh;"*/>Julien Mano</span>
              </div>
              <div className="col-md-6 text-right"><span
                /*style="font-style: italic; font-family:Frutiger Light; color: #001A70;"*/>Il y a 3 Minute</span>
              </div>
              <div className="col-md-12" /*style="border-top:1px solid #001A70;"*/>
                <p className="text-left"
                   /*style="color: #001A70; font-family:Frutiger Light; font-size:1.6vh; padding-top:1vh;"*/>Texte
                  de la notification pouvant comporter quelques lignes, sans jamais en dépasser 3. Elle sera
                  alors coupée si elle commence à devenir trop longue…</p>
              </div>
            </div>
            <div className="row" /*style="margin-bottom:2vh"*/>
              <div className="col-md-6 text-left"><img /*style="position:relative; top:-1vh;" width="30vh"*/
                                                       src="img/Oval-user.svg"/> <span
                /*style="font-weight:bold;color: #001A70; position: relative; top:-1vh; left:1vh;"*/>Julien Mano</span>
              </div>
              <div className="col-md-6 text-right"><span
                /*style="font-style: italic; font-family:Frutiger Light; color: #001A70;"*/>Il y a 3 Minute</span>
              </div>
              <div className="col-md-12" /*style="border-top:1px solid #001A70;"*/>
                <p className="text-left"
                   /*style="color: #001A70; font-family:Frutiger Light; font-size:1.6vh; padding-top:1vh;"*/>Texte
                  de la notification pouvant comporter quelques lignes, sans jamais en dépasser 3. Elle sera
                  alors coupée si elle commence à devenir trop longue…</p>
              </div>
            </div>
            <div className="row" /*style="margin-bottom:2vh"*/>
              <div className="col-md-6 text-left"><img /*style="position:relative; top:-1vh;" width="30vh"*/
                                                       src="img/Oval-user.svg"/> <span
                /*style="font-weight:bold;color: #001A70; position: relative; top:-1vh; left:1vh;"*/>Julien Mano</span>
              </div>
              <div className="col-md-6 text-right"><span
                /*style="font-style: italic; font-family:Frutiger Light; color: #001A70;"*/>Il y a 3 Minute</span>
              </div>
              <div className="col-md-12" /*style="border-top:1px solid #001A70;"*/>
                <p className="text-left"
                   /*style="border-radius: 4px; background-color: #EB4E86; width:100%; font-family:Frutiger Light; font-size:1.6vh; color:#fff; padding:1vh; margin-top:1vh;"*/>Texte
                  de la notification pouvant comporter quelques lignes, sans jamais en dépasser 3. Elle sera
                  alors coupée si elle commence à devenir trop longue…</p>
              </div>
            </div>
            <div className="row" /*style="margin-bottom:2vh"*/>
              <div className="col-md-6 text-left"><img /*style="position:relative; top:-1vh;"*/ width="30vh"
                                                       src="img/Oval-user.svg"/> <span
                /*style="font-weight:bold;color: #001A70; position: relative; top:-1vh; left:1vh;"*/>Julien Mano</span>
              </div>
              <div className="col-md-6 text-right"><span
                /*style="font-style: italic; font-family:Frutiger Light; color: #001A70;"*/>Il y a 3 Minute</span>
              </div>
              <div className="col-md-12" /*style="border-top:1px solid #001A70;"*/>
                <p className="text-left"
                   /*style="color: #001A70; font-family:Frutiger Light; font-size:1.6vh; padding-top:1vh;"*/>Texte
                  de la notification pouvant comporter quelques lignes, sans jamais en dépasser 3. Elle sera
                  alors coupée si elle commence à devenir trop longue…</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

export default AlertUser;
