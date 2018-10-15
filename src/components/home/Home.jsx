import React, { Component } from 'react';
import { MasterLayout } from '../layouts';
import { connect } from 'react-redux';

class Home extends Component {
    state = {

    }

    componentDidMount() {

    }


  render() {
    return (
      <MasterLayout {...this.props}>
        This is home page
      </MasterLayout>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps
)(Home);
