import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/offreinfos/';

export default [
  <Route path="/offre_infos/create" component={Create} exact key="create" />,
  <Route path="/offre_infos/edit/:id" component={Update} exact key="update" />,
  <Route path="/offre_infos/show/:id" component={Show} exact key="show" />,
  <Route path="/offre_infos/" component={List} exact strict key="list" />,
  <Route path="/offre_infos/:page" component={List} exact strict key="page" />
];
