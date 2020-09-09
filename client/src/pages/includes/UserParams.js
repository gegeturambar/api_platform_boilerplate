import React, {useContext, useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import {authContext} from "../../context/AuthContext";

const UserParams = () =>
{
  // Gestion de la popUp
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShowUserInfos = () => setShow(true);

  // Gestion des redirections
  const history = useHistory();
  // Gestion des logout.
  const { setAuthData } = useContext(authContext);
  const onLogOut        = (props) => setAuthData(null);
  const onMesAppli      = () => history.push('/mesapplications');
  const onPersoCompte   = () => history.push('/persocompte');

  return (
    <>
      <ul>
        <li><img src="img/Administrateur.svg"/></li>
        <li>
          <button type="button" className="menu-params" onClick={handleShowUserInfos}><img className="img-user" src="img/Oval-user.svg"/></button>
        </li>
        <li>
          <button type="button" className="menu-params" data-toggle="modal" data-target="#exampleModal"  data-backdrop="static"><img src="img/Notifications.svg"/></button>
        </li>
      </ul>

      <Modal show={show} onHide={handleClose} keyboard={false} dialogClassName="modal-login2">
        <Modal.Body>
          <ul className="w-100">
            <li className="w-100">
              <button className="button-white w-100" onClick={ onMesAppli }>Mes applications</button>
            </li>
            <li className="w-100">
              <button className="button-white w-100" onClick={ onPersoCompte }>Personnalisation de mon compte</button>
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
        </Modal.Body>
        <Modal.Footer>
          <div className="w-100 log-out-btn">
            <button><img src='img/power.svg'/></button>&nbsp;<a className="logout-a" href="#" onClick={onLogOut}>Déconnexion</a>
          </div>

          <div className=" warn-logout">Se déconnecter de ROSIE vous fera perdre toute donnée non sauvegardée.
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserParams;
