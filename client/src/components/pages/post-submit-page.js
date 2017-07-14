import React, { Component } from 'react';
import {Link} from 'react-router';
import Card from './Card';

class PostSubmitPage extends Component {
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
      POST SUBMIT Page
      </div>      
    } footerContent="Powered by Turkcell" />
    );
  }
}

export default PostSubmitPage;
