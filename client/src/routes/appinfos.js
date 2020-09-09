import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/appinfos/';

export default [
  <Route path="/app_infos/create" component={Create} exact key="create" />,
  <Route path="/app_infos/edit/:id" component={Update} exact key="update" />,
  <Route path="/app_infos/show/:id" component={Show} exact key="show" />,
  <Route path="/app_infos/" component={List} exact strict key="list" />,
  <Route path="/app_infos/:page" component={List} exact strict key="page" />
];
