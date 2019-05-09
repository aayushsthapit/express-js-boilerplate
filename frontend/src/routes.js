import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// Authentication
import SignIn from './components/Authentication/SignIn';

const Routes = () => {
  return (
    <Router>
      <Route path="/signin" component={SignIn} />
    </Router>
  );
};

export default Routes;
