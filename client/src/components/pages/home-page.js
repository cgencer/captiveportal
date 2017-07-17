import React, { Component } from 'react';
import {Link} from 'react-router';
import Card from './Card';
import ReactLoading from 'react-loading';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: props.jsonData,
    };
  }
  render() {
    return (
    <Card leftContent={
      // left
      <div className="vcenter">
        <h5>WiFi Erişimi</h5>
        <p className="card-text">Günlük toplam 360 dakika ücretsiz WiFi kullanabilmek için SMS aracılığıyla kaydolun.</p>
      </div>
    } riteContent={
      // right
      <div>
      <ReactLoading type='bubbles' color='#666' />
      </div>      
    } footerContent="Powered by Turkcell" />
    );
  }
}

export default HomePage;
