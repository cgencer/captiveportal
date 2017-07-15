import React, { Component } from 'react';
import {Link} from 'react-router';
import Card from './Card';

class LoginPage extends Component {
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
        <form>

            <div className="col-11 offset-1 row">&nbsp;</div>
            <div className="col-11 offset-1 row name">
              <h4 className="card-title-grey">Adınız ()</h4>
              <div className="col-12">
                <input type="text" className="centering" name="" /> 
              </div>      
            </div>

            <div className="col-12 row">&nbsp;</div>
            <div className="col-9 offset-2">

              <div className="container-fluid row">

                <div className="col-12 colPhone">

                  <h4 className="card-title-grey">Tel No</h4>
                  <div className="row">
                  <div className="btn-group">
                    <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">country</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <div className="row">
                      <a className="dropdown-item col-4" href="#"><div className="flag flag-tr" alt="Turkey"></div></a>
                      <a className="dropdown-item col-4" href="#"><div className="flag flag-us" alt="USA"></div></a>
                      <a className="dropdown-item col-4" href="#"><div className="flag flag-kz" alt="Kazakhstan"></div></a>
                      </div>
                      <div className="row">
                      <a className="dropdown-item col-4" href="#"><div className="flag flag-cn" alt="China"></div></a>
                      <a className="dropdown-item col-4" href="#"><div className="flag flag-jp" alt="Japan"></div></a>
                      <a className="dropdown-item col-4" href="#"><div className="flag flag-pk" alt="Pakistan"></div></a>
                      </div>
                      <div className="row">
                      <a className="dropdown-item col-4" href="#"><div className="flag flag-tr" alt="Turkey"></div></a>
                      <a className="dropdown-item col-4" href="#"><div className="flag flag-us" alt="USA"></div></a>
                      <a className="dropdown-item col-4" href="#"><div className="flag flag-kz" alt="Kazakhstan"></div></a>
                      </div>
                    </div>
                  </div>
                    <div className="col-3"><input type="text" className="centering phone-prefix" name="" value="(+90)" disabled="disabled" /></div>
                    <div className="col-8"><input type="text" className="centering phone-number" name="" value="" /></div>

                  </div>

                </div>
              </div>

            </div>
            <div className="col-11 offset-1 row">
              <div className="input-group">
                <span className="input-group-addon">
                  <input type="checkbox" />
                </span>
                <span className="agreement"><a href="#">Kullanıcı sözleşmesi</a>ni okudum ve kabul ediyorum.</span>
              </div>
            </div>
            <div className="col-11 offset-1 row text-center real-buttons">
              <button type="submit" className="btn btn-success centering">Gönder</button>
            </div>

        </form>
      </div>      
    } footerContent="Powered by Turkcell" />
    );
  }
}

export default LoginPage;
