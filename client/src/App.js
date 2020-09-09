import React  from 'react';
import Acceuil from "./pages/Accueil";
import PrivateRoute from './components/PrivateRoute';
import Authent from "./Authent";
import Previsionnel from "./pages/Previsionnel";
import Ecarts from "./pages/Ecarts";
import Realise from "./pages/Realise";
import Graphique from "./pages/Graphique";
import Simulation from "./pages/Simulation";
import MesApplications from "./pages/MesApplications";
import PersonnalisationCompte from "./pages/PersonnalisationCompte";

import roleRoutes from "./routes/role";
import usersRoutes from "./routes/users";

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router';

import role from "./reducers/role";
import users from "./reducers/users";

function App(props){
  const history = createBrowserHistory();
  const store = createStore(
    combineReducers({
      router: connectRouter(history),
      form,
      /* Add your reducers here */
      role,
      users
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          {/* A partir de l'exemple : https://dev.to/ksushiva/authentication-with-react-js-9e4 */}
          <Route path="/authent" component={Authent} strict={true} exact={true}/>
          <PrivateRoute path="/" component={Acceuil} strict={true} exact={true}/>
          <PrivateRoute path="/previsionnel" component={Previsionnel} strict={true} exact={true}/>
          <PrivateRoute path="/ecarts" component={Ecarts} strict={true} exact={true}/>
          <PrivateRoute path="/realise" component={Realise} strict={true} exact={true}/>
          <PrivateRoute path="/graphique" component={Graphique} strict={true} exact={true}/>
          <PrivateRoute path="/simulation" component={Simulation} strict={true} exact={true}/>
          <PrivateRoute path="/mesapplications" component={MesApplications} strict={true} exact={true}/>
          <PrivateRoute path="/persocompte" component={PersonnalisationCompte} strict={true} exact={true}/>
          {/* Add your routes here */}
          {roleRoutes}
          {usersRoutes}
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
}

export default App;
