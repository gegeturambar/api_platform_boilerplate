import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/previsionnel/';

export default [
  <Route path="/previsionnels/create" component={Create} exact key="create" />,
  <Route path="/previsionnels/edit/:id" component={Update} exact key="update" />,
  <Route path="/previsionnels/show/:id" component={Show} exact key="show" />,
  <Route path="/previsionnels/" component={List} exact strict key="list" />,
  <Route path="/previsionnels/:page" component={List} exact strict key="page" />
];
