import React, { Component, useHistory } from 'react';
import  { Redirect } from 'react-router-dom';

export default class Login extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      nni: '',
      password: '',
      isAuthenticated : false
    };

    this.handleInputChange  = this.handleInputChange.bind(this);
    this.handleSubmit       = this.handleSubmit.bind(this);
  }

  handleInputChange(event)
  {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event)
  {
    event.preventDefault();

    // TODO : Simplifier ..
    var nni = this.state.nni;
    var password = this.state.password;
    const requestOptions =
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ nni, password })
      };

     fetch(`https://127.0.0.1:8443/authent`, requestOptions)
      .then(response => {
          if (response.status < 200 || response.status >= 300)
          {
            // TODO : Gérer l'erreur !!--
            throw new Error(response.statusText);
          }
          else
            return response.json()
        }
      )
      .then(({ token }) => {
        this.isAuthenticated = true;
        localStorage.setItem('authData', JSON.stringify(token));

        this.setState({isAuthenticated: true});
      });
  }

  componentDidMount() {
    document.body.setAttribute("id", "login_page");
  }
  componentWillUnmount() {
    document.body.setAttribute("id", "");
  }

  render() {
   //const { from } = this.state || '/';
    const { isAuthenticated } = this.state;

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
                <form onSubmit={this.handleSubmit}>
                  <label>NNI</label>
                  <input
                    name="nni"
                    type="text"
                    checked={this.state.nni}
                    onChange={this.handleInputChange} />
                    <label>Mot de passe (GARDIAN)</label>
                  <input
                    name="password"
                    type="text"
                    value={this.state.password}
                    onChange={this.handleInputChange} />
                      <div className="text-center">
                        <button onClick={this.handleSubmit}>Se connecter</button>
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
        {isAuthenticated && (
          <Redirect to={'/'}/>
        )}
      </div>

    );
  }
}
