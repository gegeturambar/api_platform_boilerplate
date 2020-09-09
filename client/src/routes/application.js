import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/application/';

export default [
  <Route path="/applications/create" component={Create} exact key="create" />,
  <Route path="/applications/edit/:id" component={Update} exact key="update" />,
  <Route path="/applications/show/:id" component={Show} exact key="show" />,
  <Route path="/applications/" component={List} exact strict key="list" />,
  <Route path="/applications/:page" component={List} exact strict key="page" />
];
