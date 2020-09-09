import React, {Fragment, useContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Nav from "./includes/Nav";
import AlertUser from "./AlertUser";
import UserParams from "./includes/UserParams";
import {authContext} from "../context/AuthContext";
import axios from "axios";
import {ENTRYPOINT} from "../config/entrypoint";


const PersonnalisationCompte = () =>
{
  const [error, setError]         = useState(null);
  const [updated, setUpdated]     = useState(null);
  const { auth }                  = useContext(authContext);
  const [userInfos, setUserInfos] = useState(null);
  const [userId, setUserId]       = useState();
  const [nni, setNni]             = useState();
  const [prenom, setPrenom]       = useState();
  const [nom, setNom]             = useState();
  const [email, setEmail]         = useState();

  useEffect(()=>{
    //Récup du token à partir de l'authent (pas du localStorage car pas encore initié)
    let token = auth.data.token;
    // Params
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Bearer '+ token ,
      }
    };
    //Récup du endpoint de l'api.
    axios.post(new URL('/api/usr', ENTRYPOINT), {}, axiosConfig)
      .then(reponse => reponse.data)
      .then(data => {
        setUserId(data.user.id);
        setNni(data.user.nni);
        setPrenom(data.user.prenom);
        setNom(data.user.nom);
        setEmail(data.user.email);
      })
      .catch((err) => {
        setError(true);
      });
  }, [])

  const onFormSubmit = e => {
    e.preventDefault();
    var postData = {
      id: userId,
      prenom: prenom,
      nom: nom,
      email : email
    };

    let token = auth.data;
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/merge-patch+json',
        Authorization: 'Bearer '+ token ,
      }
    };

    axios.patch(new URL('/users/'+userId, ENTRYPOINT),  postData, axiosConfig)
      .then(reponse => reponse.data)
      .then(data => {
        setUpdated(true);
      })
      .catch((err) => {
        setError(true);
      });

  };

  return (
    <>
      <div className="row block-home">
        {/* Navigation gauche */}
        <Nav/>
        {/* Fin Navigation gauche */}
        <div className="col-md-11 block-right-home">
          <div className="header row">
            <div className="col-md-12 text-center">
              <div className="Name-service">
                <div className="Name-page">Personnalisation de mon compte</div>
              </div>
              <div className="text-right admin">
                {/* Boutons Params haut droite du user */}
                <UserParams/>
                {/* Fin Boutons Params haut droite du user */}
              </div>
            </div>
          </div>
          <div className="block-rosie row">&nbsp;</div>
          <div className="block-rosie row">
            <div className="col-md-12">
              <div className="block-connexion-down text-left">
                <div className="row">
                  <div className="col-md-12">Veuillez renseigner les informations à modifier. <br/><br/>&nbsp;</div>
                </div>

                <form onSubmit={onFormSubmit}>
                  <input type="hidden" name="id" value={userId}/>
                  { updated && (
                    <div className="row">
                      <div className="col-md-2"></div>
                      <div className="col-md-7">
                        <div className="alert alert-success" role="alert">Modifications enregistrées</div>
                      </div>
                    </div>
                  )}
                  <div className="row">
                    <div className="col-md-2"><label>Votre NNI</label></div>
                    <div className="col-md-7"><input type="text" name="nni" value={ nni } onChange={e => { setNni(e.target.value);}} disabled="disabled"/></div>
                  </div>
                  <div className="row">
                    <div className="col-md-2"><label>Votre Prénom</label></div>
                    <div className="col-md-7"><input type="text" name="prenom" value={ prenom } onChange={e => { setPrenom(e.target.value);}}/></div>
                  </div>
                  <div className="row">
                    <div className="col-md-2"><label>Votre Nom</label></div>
                    <div className="col-md-7"><input type="text" name="nom" value={nom } onChange={e => { setNom(e.target.value);}}/></div>
                  </div>

                  <div className="row">
                    <div className="col-md-2"><label>Votre Email</label></div>
                    <div className="col-md-7"><input type="text" name="email" value={ email } onChange={e => { setEmail(e.target.value);}}/></div>
                  </div>

                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-7 text-right">
                      <button>Valider les modifications</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <AlertUser/>
      </div>
    </>
  )
}
export default PersonnalisationCompte;
