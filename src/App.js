import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './sass/main.scss';
import { loadUser } from './actions';
import setAxiosAuthHeader from './utils/setAxiosAuthHeader';

//COMPONENTS
import Home from './Pages/Home';
import Login from './components/Login';
import Account from './Pages/Account';
import PrivateRoute from './components/Routing/privateRoute';
import CreateAListing from './Pages/CreateAListing';

function App({ loadUser }) {
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAxiosAuthHeader(token);
    }
    loadUser();
  }, [loadUser]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={Login} />
          <PrivateRoute path="/myaccount" exact component={Account} />
          <PrivateRoute
            path="/listings/new"
            exact
            component={CreateAListing}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default connect(null, { loadUser })(App);
