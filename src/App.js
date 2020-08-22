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
import Home from './components/Home';
import Login from './components/Login';

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
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default connect(null, { loadUser })(App);
