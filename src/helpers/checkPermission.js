import Cookies from 'universal-cookie';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const cookies = new Cookies();

const CheckPermission = (name) => {
  let check = false;
  let authState = cookies.get('authState');
  if (authState) {
    if (authState.user.role && authState.user.role.roleType === name) {
      check = true;
    } else {
      check = false;
    }
  }
  return check;
}

const CheckId = (id) => {
  let check = false;
  let authState = cookies.get('authState');
  if (authState) {
    if (authState.user.userId === id) {
      check = true;
    } else {
      check = false;
    }
  }
  return check;
}

const checkButton = (name) => {
  let check = false;
  let authState = cookies.get('authState');
  if (authState.user && authState.user.role && authState.user.role.power) {
    if (authState.user.role.power.indexOf(name) > -1) {
      check = true;
    } else {
      check = false;
    }
  }
  return check;
}

const Authorization = (allowedPermission, isPage = false) => (WrappedComponent) => {
  class WithAuthorization extends Component {
    render() {
      let authState = cookies.get('authState');
      const parentProps = Object.assign({}, this.props);
      if (authState.user && authState.user.role && authState.user.role.power) {
        if (authState.user.role.power.indexOf(allowedPermission) > -1) {
          return <WrappedComponent {...parentProps} />;
        }
      } else {
        return <Redirect push to="/login"/>;
      }

      if (isPage) {
        return <Redirect push to="/"/>;
      }

      return false;
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth
  });

  return connect(mapStateToProps, null)(WithAuthorization);
};

export {
  CheckPermission,
  CheckId,
  checkButton
};

export default {
  Component: Authorization,
  Element: Authorization()(),
};