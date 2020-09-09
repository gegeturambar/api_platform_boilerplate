import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/infra/';

export default [
  <Route path="/infras/create" component={Create} exact key="create" />,
  <Route path="/infras/edit/:id" component={Update} exact key="update" />,
  <Route path="/infras/show/:id" component={Show} exact key="show" />,
  <Route path="/infras/" component={List} exact strict key="list" />,
  <Route path="/infras/:page" component={List} exact strict key="page" />
];
