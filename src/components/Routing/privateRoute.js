import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import history from '../../history';

const PrivateRoute = ({
  component: Component,
  auth: { isLogedIn, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isLogedIn && !loading ? (
        <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location },
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
