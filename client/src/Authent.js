import React, {useState, useContext, useEffect} from 'react';
import { authContext } from './context/AuthContext';
import { ENTRYPOINT } from './config/entrypoint';
import axios from 'axios';
import {Redirect} from "react-router-dom";

const Authent = ({history}) => {
  const [nni, setNni] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);
  const { setAuthData } = useContext(authContext);

  // !! : Equivaut à componentDidMount dans un classe, mais ici on est dans un hook.
  useEffect(() =>{
    document.body.setAttribute("id", "login_page");
  }, []);

  const onFormSubmit = e => {
    e.preventDefault();

    var postData = {
      nni: nni,
      password: password
    };

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };

    axios.post(new URL('/authent', ENTRYPOINT), postData, axiosConfig)
      .then((reponse) => {
        console.log("User identifié, token = "+reponse.data.token)
        setAuthData(reponse.data);
        history.push('/');
      })
      .catch((err) => {
        setError(true);
      });
  };

  return (
    <div className="height_page">
      <div className="row">
        <div className="col-md-12 header">
          <div className="logo">
            <img alt="Rosie" src="img/ROSIE_logo_blanc.svg"/></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 block-connexion-top text-center">
          <div className="block-connexion bold-title">
            <h1>Connexion</h1>
            <div className="block-connexion-down text-left">
              <p className="text-center">Bienvenue sur ROSIE, votre Roadmap simplifiée. Pour accéder à l’outil,
                veuillez vous connecter.</p>
              <form onSubmit={onFormSubmit}>
                <label>NNI</label>
                <input
                  name="nni"
                  type="text"
                  onChange={e => {
                    setNni(e.target.value);
                  }} autoFocus/>
                <label>Mot de passe (GARDIAN)</label>
                <input
                  name="password"
                  type="text"
                  onChange={e => {
                    setPassword(e.target.value);
                  }}/>
                {error && (
                  <div className="text-center login-error">NNI inexistant ou mot de passe incorrect</div>
                )}
                <div className="text-center">
                  <button type="submit">Se connecter</button>
                </div>
              </form>
            </div>
          </div>
          <div className="block-exercice align-top">
            <p>Exercice(s) budgétaire(s) en cours</p>
            <p className="block-blue text-left"><i>Titre de l'exercice</i><br/>DU 02/2019 au 12/2019
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <img alt="edf" src="img/edf-logo.svg"/>
      </div>
    </div>
  );
};

export default Authent;
