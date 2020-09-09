import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component
{
  render()
  {
    return (
    <div className="col-md-1 menu text-center">
      <div className="logo"><img alt="Rosie" src="img/ROSIE_logo_bleu.svg"/></div>
      <ul>
        <li><NavLink to='/' activeClassName="active"><img src="img/dashboard copy.svg"/><span>Tableau de bord</span></NavLink></li>
        <li><NavLink to='/previsionnel' activeClassName="active"><img src="img/previsionnel.svg"/><span>Mon prévisionnel</span></NavLink></li>
        <li><NavLink to='/ecarts' activeClassName="active"><img src="img/ecarts.svg"/><span>Ecarts</span></NavLink></li>
        <li><NavLink to='/realise' activeClassName="active"><img src="img/realise.svg"/><span>Réalisé</span></NavLink></li>
        <li><NavLink to='/graphique' activeClassName="active"><img src="img/graphique.svg"/><span>Graphique</span></NavLink></li>
        <li><NavLink to='/simulation' activeClassName="active"><img src="img/simulation.svg"/><span>Simulation</span></NavLink></li>
      </ul>
    </div>
  );
  }
}

export default Nav;
