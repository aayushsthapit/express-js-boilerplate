import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// Authentication
import SignIn from './components/Authentication/SignIn';
import AdminPage from './components/common/AdminPage'

const Routes = () => {
  return (
    <Router>
        <Route exact path='/' component={SignIn}/>
        <Route path="/signin" component={SignIn} />
        <Route path="/admin" component={AdminPage}/>
    </Router>
  );
};

export default Routes;
