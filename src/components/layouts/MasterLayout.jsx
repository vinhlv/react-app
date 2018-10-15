import React, { Component } from 'react';
import {
    Footer,
    Header,
    Breadcrumb
} from '../layouts';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';

class MasterLayout extends Component {

    render() {
        const { children } = this.props;
        return (
            <div>
                <Header/>
                <div className="dashboard-container">
                    <div className="container">
                        <div className="dashboard-wrapper">
                            <div className="left-sidebar">
                                <Breadcrumb />
                                {children}
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
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
)(MasterLayout);
