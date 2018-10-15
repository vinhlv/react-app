import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { RenderRoutes } from '../routes';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/';
import '../assets/styles/main.css';

class App extends Component {

    static propTypes = {
        route: Proptypes.object.isRequired
    }

    render() {
        const { route } = this.props;
        return (
            <div>
                <RenderRoutes routes={route.routes} />
                <ToastContainer hideProgressBar={true}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth.user
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
