import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/option/';

export default [
  <Route path="/options/create" component={Create} exact key="create" />,
  <Route path="/options/edit/:id" component={Update} exact key="update" />,
  <Route path="/options/show/:id" component={Show} exact key="show" />,
  <Route path="/options/" component={List} exact strict key="list" />,
  <Route path="/options/:page" component={List} exact strict key="page" />
];
