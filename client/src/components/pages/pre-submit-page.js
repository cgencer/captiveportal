import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';
import * as actions from '../../actions/auth';
import Card from './Card';
import Counter from '../Counter';

class PreSubmitPage extends React.Component {
  constructor(props) {
    super(props);
    if(props.jsonData.template.length === 0) browserHistory.push('/');
    this.state = {
      jsonData: props.jsonData,
      data: {
        token: props.token,
        phone: props.phone,
        code: '',
      },
      loading: false,
      errors: {
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    var errors = this._validate();
    if(Object.keys(errors).length != 0) {
      this.setState({
        errors: errors
      });
      return;
    }
    var xhr = this._create();
    xhr.done(this._onSuccess)
      .fail(this._onError)
      .always(this.hideLoading)
  }

    hideLoading() {
      this.setState({loading: false});
    }

    _create() {
    return $.ajax({
      url: '/api/users',
      type: 'POST',
      data: this.state.data,
      beforeSend: function () {
        this.setState({loading: true});
      }.bind(this)
    })
  }

  _validate() {
    var errors = {}
    if(this.state.code == "") {
      errors.code = "Code is required";
    }
    return errors;
  }

  _onSuccess(data) {
    this.refs.code_form.getDOMNode().reset();
    this.setState(this.getInitialState());
    // show success message
  }

  _onError(data) {
    var message = "Failed to create the user";
    var res = data.responseJSON;
    if(res.message) {
      message = data.responseJSON.message;
    }
    if(res.errors) {
      this.setState({
        errors: res.errors
      });
    }
  }

  render() {

    const ref = this.state.jsonData;

    return (
    <Card leftContent={
      // left
      <div className="vcenter">
        <h5>{ref.texts.left.header}</h5>
        <p className="card-text">{ref.texts.left.content}</p>
      </div>
    } riteContent={
      // right
      <div>
        <div className="col-12">&nbsp;</div>
        <div className="col-12">
          <h4 className="card-title-grey">{ref.texts.preSubmit.headerTime}</h4>
          <div className="fullsize">
            <Counter secs="15" zapTo="login-page" />
          </div>
          <h4 className="card-title-grey">{ref.texts.preSubmit.headerCode}</h4>
          <span className="help-block">{this.state.errors}</span>
          <div className="fullsize"><form ref="code_form" onSubmit={this.handleSubmit}>
            <input type="hidden" ref="token" id="token" name="token" value={this.state.token} />
            <input type="hidden" ref="phone" id="phone" name="phone" value={this.state.phone} />
            <input type="text" className="centering" ref="code" id="code" name="code" />
          </form></div>
        </div>

        <div className="col-12">&nbsp;</div>
        <div className="col-10 offset-1 real-buttons fullsize">
          <a href="#" className="btn btn-success centering">{ref.texts.preSubmit.button1}</a>
          <a href="#" className="btn btn-danger btn-ghosted centering">{ref.texts.preSubmit.button2}</a>  
        </div>
      </div>
      } footerContent={ref.texts.footer} />
    );
  }
}
PreSubmitPage.defaultProps = {
  displayName: 'PreSubmit Page'
}
export default PreSubmitPage;
