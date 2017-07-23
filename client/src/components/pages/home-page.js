import React, { Component } from 'react';
import {Link} from 'react-router';
import ReactLoading from 'react-loading';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      jsonData: props.jsonData,
      token: props.token
    };
  }
  render() {
    return (
      <div className="loadingSign">
        <ReactLoading type='bubbles' color='#666' />
      </div>
    );
  }
}
HomePage.defaultProps = {
  displayName: 'Home Page'
}
export default HomePage;
