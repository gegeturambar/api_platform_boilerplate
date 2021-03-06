import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/offre/';

export default [
  <Route path="/offres/create" component={Create} exact key="create" />,
  <Route path="/offres/edit/:id" component={Update} exact key="update" />,
  <Route path="/offres/show/:id" component={Show} exact key="show" />,
  <Route path="/offres/" component={List} exact strict key="list" />,
  <Route path="/offres/:page" component={List} exact strict key="page" />
];
