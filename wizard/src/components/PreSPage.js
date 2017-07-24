import React from 'react';
import {Link} from 'react-router';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import _ from 'lodash';
import Card from './Card';

import '../styles/wizard.css';

class PreSPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      jsonData: {},
      simulateXHR: false,
      XHRDelay: 450,
      highlight: false,
      showSource: false,
      isDisabled: false
    }
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
    return (
      <Card leftContent={
        // left
      <div className="vcenter">
        <h5 className="editables">
          { this.state.isLoaded
                ? <RIEInput
            value={this.state.jsonData.texts.left.header}
            change={this.virtualServerCallback}
            propName="text"
            className={this.state.highlight ? "editable" : ""}
            classLoading="loading"
            classInvalid="invalid"
            isDisabled={this.state.isDisabled} />
                : ''
          }
        </h5>
        <p className="card-text editables">
          { this.state.isLoaded
                ? <RIETextArea
            value={this.state.jsonData.texts.left.content}
            change={this.virtualServerCallback}
            propName="textarea"
            className={this.state.highlight ? "editable editarea" : ""}
            validate={this.isStringAcceptable}
            classLoading="loading"
            classInvalid="invalid"
            isDisabled={this.state.isDisabled} />
                : ''
          }
          </p>
      </div>
      } riteContent={
        // right
        <div>
          <div className="col-12">
            <div className="logoDesktop">

              <img className="" src="../img/turkcell-logo.png" alt="Operator logo" />
            </div>
          </div>
              <div className="col-12">&nbsp;</div>
              <div className="col-12">
                <h4 className="card-title-grey">Şifre girmek için kalan süreniz</h4>
                <div className="fullsize">
                  <h3>99:99</h3>
                </div>
                <h4 className="card-title-grey">SMS Şifresi</h4>
                <div className="fullsize">
                  <br />
                </div>
              </div>

              <div className="col-12">&nbsp;</div>
              <div className="col-10 offset-1 real-buttons fullsize">
                <button href="#" className="btn btn-success centering">Gönder</button><br />
                <button href="#" className="btn btn-danger btn-ghosted centering">Numarayı değiştir</button>  
              </div>
        </div>      
    } footerContent=
              { this.state.isLoaded
                ? <RIEInput
                    value={this.state.texts.footer}
                    change={this.virtualServerCallback}
                    propName="text"
                    className={this.state.highlight ? "editable" : ""}
                    classLoading="loading"
                    classInvalid="invalid"
                    isDisabled={this.state.isDisabled} />
                : ''
          }
    />);
  };
}

export default PreSPage;
