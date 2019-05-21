import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// Authentication
import SignIn from './components/Authentication/SignIn';
import AdminPage from './components/common/AdminPage'
import {PrivateRoute,DefaultRoute} from './PrivateRoute'

const Routes = () => {
  return (
    <Router>
        <DefaultRoute exact path='/'/>
        <Route path="/signin" component={SignIn} />
        <PrivateRoute path="/admin" component={AdminPage}/>
    </Router>
  );
};

export default Routes;
