import React, {useState, useContext} from 'react';
import { authContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

const InfosUser = () => {
  const { setAuthData } = useContext(authContext);
  const history = useHistory();
  const [hideModal, setHideModal] = useState(false);
  const clickMesAppli = () =>
  {
    document.getElementById("exampleModal2").setAttribute('class', 'modal fade');
    history.push('/mesapplications');
  }
  const onLogOut = (props) =>
  {
    //Suppression du token.
    setAuthData(null);
  }

  return(
    <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
      <div className="modal-dialog modal-login2" role="document">
        <div className="modal-content text-center">
          <div className="modal-body">
            <ul className="w-100">
              <li className="w-100">
                <button className="button-white w-100" onClick={ clickMesAppli }>Mes applications</button>
              </li>
              <li className="w-100">
                <button className="button-white w-100">Personalisation mon compte</button>
              </li>
              <li className="w-100">
                <button className="button-white w-100">Documentation ROSIE</button>
              </li>
            </ul>
            <ul className="w-100 contact-support">
              <li>
                <button className="button-white w-100">Contacter le support</button>
              </li>
            </ul>
            <div className="row logout-div">
              <div className='col-md-8 text-left'><a className="logout-a" href="#" onClick={onLogOut}>Déconnexion</a></div>
              <div className='col-md-4 text-right log-out-btn'>
                <button><img
                  src='img/power.svg'/></button>
              </div>
            </div>
            <div className="text-left warn-logout">Se déconnecter de ROSIE vous fera perdre toute donnée non sauvegardée.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


export default InfosUser;
