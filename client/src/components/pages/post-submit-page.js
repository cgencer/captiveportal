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
            <div className="row">
              <div className="col-12">&nbsp;</div>
              <div className="col-12">
                <h4 className="card-title-grey">Kalan Süreniz</h4>
                <div className="fullsize hr-mins">
                  <h3>04:23</h3>
                  <h5 className="card-title-grey hrs">saat</h5>
                  <h5 className="card-title-grey mins">dakika</h5>
                </div>
              </div>

              <div className="col-12">&nbsp;</div>
              <div className="col-10 offset-1 real-buttons fullsize">
                <a href="#" className="btn btn-success centering">Ek süre satın al</a>
              </div>
  
            </div>
      </div>      
    } footerContent="Powered by Turkcell" />
    );
  }
}

export default PostSubmitPage;
