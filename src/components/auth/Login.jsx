import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';

class Login extends Component {

    constructor(props) {
        super(props);

        this._onChange = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
    }


    state = {
        email: '',
        password: '',
        isCheck: false,
        isLoading: false
    }

    _onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    _onSubmit(e) {

        e.preventDefault();

    }

    render() {
        return (
            <div>
                This is login page
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
)(Login);
