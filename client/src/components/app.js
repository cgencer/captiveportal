import React, { Component } from 'react';
import HeaderTemplate from './template/header';
import FooterTemplate from './template/footer';

//import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderTemplate logo="Your Site" />

        <div className="container">
          {this.props.children}
        </div>

        <FooterTemplate />
      </div>
    );
  }
}

export default App;
