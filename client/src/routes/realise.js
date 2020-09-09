import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/realise/';

export default [
  <Route path="/realises/create" component={Create} exact key="create" />,
  <Route path="/realises/edit/:id" component={Update} exact key="update" />,
  <Route path="/realises/show/:id" component={Show} exact key="show" />,
  <Route path="/realises/" component={List} exact strict key="list" />,
  <Route path="/realises/:page" component={List} exact strict key="page" />
];
