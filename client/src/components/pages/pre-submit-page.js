import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';
import * as actions from '../../actions/auth';
import { loginUser } from '../../actions/auth';
import Card from './Card';
import Counter from '../Counter';
import axios from 'axios';

class PreSubmitPage extends React.Component {
  constructor(props) {
    super(props);
    if(props.jsonData.template.length === 0) browserHistory.push('/');
    this.state = {
      jsonData: props.jsonData,
      data: {
        token: props.token,
        phone: props.phone,
        name: props.name
      },
    };
  }

  changePhone(e) {
    e.preventDefault();
    browserHistory.push('/login-page');
  }

  submitForm(e) {
    e.preventDefault();

    if( this.refs.code.value === this.state.jsonData.testValues.sms &&
        this.refs.token.value === this.state.data.token
      ) {
      let dataset = {
        code: this.refs.code.value,
        token: this.state.token,
        phone: this.state.data.phone,
        name: this.state.data.name
      }
      this.setState({ data: dataset });

      axios({
        method: 'post',
        baseURL: 'http://localhost:3000/api/',
        url: '/login',
        data: dataset
      }).then(function (response) {
        if(response.data.result === "OK") {
//          this.props.loginUser({ phone, token });
          browserHistory.push('/post-submit-page');
        } 
      }).catch(function(error) {
        console.log(error);
      });

    }
  }

  render() {

    const ref = this.state.jsonData;

    return (
    <Card leftContent={
      // left
      <div>
      <h4>{this.state.phone}</h4>
      <div className="vcenter">
        <h5>{ref.texts.left.header}</h5>
        <p className="card-text">{ref.texts.left.content}</p>
      </div>
      </div>
    } riteContent={
      // right
      <div>
        <div className="col-12">&nbsp;</div><form ref="code_form" name="code_form" id="code_form" onSubmit={this.submitForm.bind(this)}>
        <div className="col-12">
          <h4 className="card-title-grey">{ref.texts.preSubmit.headerTime}</h4>
          <div className="fullsize">
            <Counter secs={ref.timers.sms} zapTo="login-page" />
          </div>
          <h4 className="card-title-grey">{ref.texts.preSubmit.headerCode}</h4>
          <span className="help-block">{this.state.errors}</span>
          <div className="fullsize">
            <input type="hidden" ref="token" id="token" name="token" value={this.state.data.token} />
            <input type="hidden" ref="phone" id="phone" name="phone" value={this.state.data.phone} />
            <input type="text" ref="code" id="code" name="code" />
          </div>
        </div>

        <div className="col-12">&nbsp;</div>
        <div className="col-10 offset-1 real-buttons fullsize">
          <button type="submit" ref="submitForm" className="btn btn-success centering">{ref.texts.preSubmit.button1}</button>
          <button type="button" ref="changePhone" onClick={this.changePhone.bind(this)} className="btn btn-danger btn-ghosted centering">{ref.texts.preSubmit.button2}</button>
        </div></form>
      </div>
      } footerContent={ref.texts.footer} />
    );
  }
}
PreSubmitPage.defaultProps = {
  displayName: 'PreSubmit Page'
}
export default PreSubmitPage;
