import React, { Component } from 'react';
import {Link} from 'react-router';
import Card from './Card';
import Counter from '../Counter';

class PreSubmitPage extends Component {
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
        <div className="col-12">&nbsp;</div>
        <div className="col-12">
          <h4 className="card-title-grey">Şifre girmek için kalan süreniz</h4>
          <div className="fullsize">
            <Counter secs="90" />
          </div>
          <h4 className="card-title-grey">SMS Şifresi</h4>
          <div className="fullsize">
            <input type="text" className="centering" name="" />         
          </div>
        </div>

        <div className="col-12">&nbsp;</div>
        <div className="col-10 offset-1 real-buttons fullsize">
          <a href="#" className="btn btn-success centering">Gönder</a>
          <a href="#" className="btn btn-danger btn-ghosted centering">Numarayı değiştir</a>  
        </div>
      </div>      
    } footerContent="Powered by Turkcell" />
    );
  }
}

export default PreSubmitPage;
