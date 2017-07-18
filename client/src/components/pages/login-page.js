import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';
import Card from './Card';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    // CHECK: If template json cant be grabbed, jump to indexpage once more
//    if(props.jsonData.template.length === 0) browserHistory.push('/');
    this.state = {
      token: props.token,
      jsonData: props.jsonData,
      data: {
        token: props.token,
        phone: '',
        code: '',
        name: ''
      },
      loading: false,
      errors: {
      }
    };
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
//    var errors = this._validate();
    var errors = [];
    if(Object.keys(this.state.errors).length != 0) {
      this.setState({ errors: errors });
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
      url: '/api/first-step',
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
    this.refs.signup_form.getDOMNode().reset();
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

  allFlags() {
    return (
      <div>
        <div className="row">      
        {this.state.jsonData.flags.map(function(daflag, index) {
          const flagStyle= 'flag flag-' + daflag;
          const rows = ((index % 3 === 0) && (index !== 0)) ? '</div><div className="row">' : '';
          return <a className="dropdown-item col-4" href="#"><div className={flagStyle} alt={daflag}></div></a>
        })}
        </div>
      </div>
    );
  }

  render() {
    const ref = this.state.jsonData;

    return (
      <Card leftContent={
        // left
        <div className="vcenter">
          <h5>{ref.texts.left.header}:::</h5>
          <p className="card-text">{ref.texts.left.content}</p>
        </div>
      } riteContent={
        // right
        <div>
          <form ref="signup_form" onSubmit={this.handleSubmit}>
            <input type="hidden" ref="token" id="token" name="token" value={this.state.token} />
            <div className="col-11 offset-1 row">&nbsp;</div>
            <div className="col-11 offset-1 row name">
              <h4 className="card-title-grey">{ref.texts.login.headerName}</h4>
              <div className="col-12">
                <input type="text" className="centering" name="user-name" id="user-name" /> 
              </div>      
            </div>

            <div className="col-12 row">&nbsp;</div>
            <div className="col-9 offset-2">

              <div className="container-fluid row">

                <div className="col-12 colPhone">
                  <h4 className="card-title-grey">{ref.texts.login.headerPhone}</h4>
                  <div className="row">
                  <div className="btn-group">
                    <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">country</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      {this.allFlags()}
                    </div>
                  </div>
                    <div className="col-3"><input type="text" id="user-phone-prefix" name="user-phone-prefix" value="(+90)" disabled="disabled" /></div>
                    <div className="col-8"><input type="text" id="user-phone-prefix" name="user-phone-number" onChange={this.handleChange.bind(this)} /></div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-11 offset-1 row">
              <div className="input-group">
                <span className="input-group-addon">
                  <input type="checkbox" ref="agree" id="agree" name="agree" />
                </span>
                <span className="agreement">{ref.texts.login.agree}</span>
              </div>
            </div>
            <div className="col-11 offset-1 row text-center real-buttons">
              <button type="submit" className="btn btn-success centering">{ref.texts.login.button1}</button>
            </div>

        </form>
        </div>
      } footerContent={ref.texts.footer} />
    );
  }
};
LoginPage.defaultProps = {
  displayName: 'LoginPage'
}
export default LoginPage;
