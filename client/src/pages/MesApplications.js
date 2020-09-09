import React, {Fragment, useContext, useEffect, useState} from 'react';
import Nav from "./includes/Nav";
import UserParams from "./includes/UserParams";
import AlertUser from "./AlertUser";
import FavorisBlock from "../../src/components/users/MesApplicationsCompo/FavorisBlock";

import axios from "axios";
import {ENTRYPOINT} from "../config/entrypoint";
import {authContext} from "../context/AuthContext";

const MesApplications = (props) =>
{
  const [error, setError] = useState(null);
  const { auth } = useContext(authContext);
  const [title, setTitle] = useState();
  useEffect(()=>{
    //Récup du token à partir de l'authent (pas du localStorage car pas encore initié)
    let token = auth.data.token;
    let userId = auth.data.UserData.id;
    // Params
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Bearer '+ token ,
      }
    };

    axios.get(new URL('/users/'+userId, ENTRYPOINT), {}, axiosConfig)
      .then(reponse => reponse.data)
      .then(data => {
        console.log(data);
        setTitle(data.nom +' '+data.prenom)
      })
      .catch((err) => {
        setError(true);
      });
  }, [])
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
                <div className="name">{title && (title)}</div>
                <div className="service">MES APPLICATIONS</div>
              </div>
              <div className="text-right admin">
                {/* Boutons Params haut droite du user */}
                <UserParams/>
                {/* Fin Boutons Params haut droite du user */}
              </div>
            </div>
          </div>
          <FavorisBlock/>

      </div>
      </div>
      <AlertUser/>
    </Fragment>
  )
}

export default MesApplications;
