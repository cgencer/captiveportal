import React from 'react';
import {Link} from 'react-router';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import _ from 'lodash';
import Card from './Card';

import '../styles/wizard.css';

class LoginPage extends React.Component {

  constructor(props){
    super(props);
    this.cb = props.cb;
    this.state = {
      texts: {
        header: 'WiFi Erişimi',
        intro : 'Günlük toplam 360 dakika ücretsiz WiFi kullanabilmek için SMS aracılığıyla kaydolun.',
        name: 'Adınız',
        phone: 'Tel No',
        agree_pre: '',
        agree_lnk: 'Kullanıcı sözleşmesi',
        agree_post: 'ni okudum ve kabul ediyorum.',
        footer: 'Powered by Turkcell',
        buttons: {
          submit: 'Gönder',
        }
      }
    };
    this.state = props.state;
  };

  virtualServerCallback = (newState) => {
    if (this.state.simulateXHR) {
      window.setTimeout(function() {
        this.changeState(newState);
      }.bind(this), this.state.XHRDelay);
    } else {
      this.changeState(newState);
    }
  };

  changeState = (newState) => {
    this.setState(newState);
  };

  render = () => {
    var diz = this;
    return(
    <Card saver={diz.saveJSON()} leftContent={

      // left
      <div className="vcenter">
        <h5 className="editables">
          <RIEInput
            value={this.state.texts.header}
            change={this.virtualServerCallback}
            propName="text"
            className={this.state.highlight ? "editable" : ""}
            classLoading="loading"
            classInvalid="invalid"
            isDisabled={this.state.isDisabled} />
        </h5>
        <p className="card-text editables">
          <RIETextArea
            value={this.state.texts.intro}
            change={this.virtualServerCallback}
            propName="textarea"
            className={this.state.highlight ? "editable editarea" : ""}
            validate={this.isStringAcceptable}
            classLoading="loading"
            classInvalid="invalid"
            isDisabled={this.state.isDisabled} />
          </p>
      </div>

    } riteContent={

      // right
      <div>

        <div className="row">
          <div className="col-12">
            <div className="logoDesktop">

              <img className="" src="../img/turkcell-logo.png" alt="Operator logo" />
            </div>
          </div>
          <div id="content">

            <div className="col-11 offset-1 row">&nbsp;</div>
            <div className="col-11 offset-1 row name">
              <h4 className="card-title-grey editables">
              <RIEInput
                value={this.state.texts.name}
                change={this.virtualServerCallback}
                propName="text"
                className={this.state.highlight ? "editable" : ""}
                classLoading="loading"
                classInvalid="invalid"
                isDisabled={this.state.isDisabled} />
              </h4>
              <div className="col-12">
                <input type="text" className="centering" name="" disabled="disabled" /> 
              </div>      
            </div>

            <div className="col-12 row">&nbsp;</div>
            <div className="col-9 offset-2">

              <div className="container-fluid row">

                <div className="col-12 colPhone">

                  <h4 className="card-title-grey editables">
                  <RIEInput
                    value={this.state.texts.phone}
                    change={this.virtualServerCallback}
                    propName="text"
                    className={this.state.highlight ? "editable" : ""}
                    classLoading="loading"
                    classInvalid="invalid"
                    isDisabled={this.state.isDisabled} />
                  </h4>
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
                    <div className="col-8"><input type="text" className="centering phone-number" name="" value="" disabled="disabled" /></div>

                  </div>

                </div>
              </div>

            </div>
            <div className="col-11 offset-1 row">
              <div className="input-group">
                <span className="input-group-addon">
                  <input type="checkbox" disabled="disabled" />
                </span>
                <span className="agreement editables">
                  <RIEInput
                    value={this.state.texts.agree_pre}
                    change={this.virtualServerCallback}
                    propName="text"
                    className={this.state.highlight ? "editable" : ""}
                    classLoading="loading"
                    classInvalid="invalid"
                    isDisabled={this.state.isDisabled} />
                  <a href="#"><RIEInput
                    value={this.state.texts.agree_lnk}
                    change={this.virtualServerCallback}
                    propName="text"
                    className={this.state.highlight ? "editable" : ""}
                    classLoading="loading"
                    classInvalid="invalid"
                    isDisabled={this.state.isDisabled} />
                  </a><RIEInput
                    value={this.state.texts.agree_post}
                    change={this.virtualServerCallback}
                    propName="text"
                    className={this.state.highlight ? "editable" : ""}
                    classLoading="loading"
                    classInvalid="invalid"
                    isDisabled={this.state.isDisabled} />

                </span>
              </div>
            </div>
            <div className="col-11 offset-1 row text-center real-buttons">
              <a href="#" className="btn btn-success centering"><RIEInput
                    value={this.state.texts.buttons.submit}
                    change={this.virtualServerCallback}
                    propName="text"
                    className={this.state.highlight ? "editable" : ""}
                    classLoading="loading"
                    classInvalid="invalid"
                    isDisabled={this.state.isDisabled} /></a>
            </div>
          </div>
        </div>
      </div>      
    } footerContent={
                  <RIEInput
                    value={this.state.texts.footer}
                    change={this.virtualServerCallback}
                    propName="text"
                    className={this.state.highlight ? "editable" : ""}
                    classLoading="loading"
                    classInvalid="invalid"
                    isDisabled={this.state.isDisabled} />
    } />);
  };
}

export default LoginPage;
