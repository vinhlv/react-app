import React from 'react';
import PropTypes from 'prop-types';
import Route from 'react-router/Route';
import ConnectedSwitch from './connectedSwitch';
import withRouter from 'react-router/withRouter';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const renderRoutes = ({ routes, location, auth }) => {

  return (
    <ConnectedSwitch>
      { routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          strict={route.strict}
          exact={route.exact}
          render={(props) => (
            <div>
              {
                route.requireLogin && route.requireLogin !== location.pathname && !auth.token &&
                <Redirect to={{
                  pathname: route.requireLogin
                }}/>
              }
              {
                (
                  !route.requireLogin ||
                  auth.token ||
                  !route.path ||
                  route.requireLogin === route.path
                ) &&
                <route.component {...props} route={route}/>
              }
            </div>
          )}
        />
      ))}
    </ConnectedSwitch>
  )
}

renderRoutes.propTypes = {
  routes: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth.user
});

export default withRouter(connect(mapStateToProps, null)(renderRoutes));
