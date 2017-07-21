import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';
import Card from './Card';
import axios from 'axios';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    // CHECK: If template json cant be grabbed, jump to indexpage once more
//    if(props.jsonData.config.template.length === 0) browserHistory.push('/');
    this.state = {
      token: props.token,
      jsonData: props.jsonData,
      data: {
        token: props.token,
        phone: '',
        code: '',
        name: ''
      },
    };
  }

  submitForm(e) {
    e.preventDefault();

    if( this.refs.token.value === this.state.token &&
        this.refs.agree.value === 'on'
      ) {
      let dataset = {
        token: this.state.token,
        phone: this.refs.prefix.value + this.refs.number.value,
        name: this.refs.name.value
      }
      this.setState({ data: dataset });

      axios({
        method: 'POST',
        baseURL: 'http://localhost:3000/api/',
        url: '/prelogin',
        data: dataset
      }).then(function (response) {
        if(response.data.result === "OK") {
          browserHistory.push('/pre-submit-page');
        } 
      }).catch(function(error) {
        console.log(error);
      });

    } else {
      console.log(this.props.location.state);
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

    let maskedPhone = "";
    if (ref.client.phone !== "" && ref.config.maskedLogin === true) {
      let maskedPhone = ref.client.phone;
      maskedPhone = maskedPhone.substr(0, maskedPhone.length-2);
    }

    return (
      <Card 
        logo={ref.images.logo} 
        logoStyle={{backgroundColor: ref.colors.back.logo}}
        leftStyle={{backgroundColor: ref.colors.back.left}} 
        rightStyle={{backgroundColor: ref.colors.back.rite}} 
        leftContent={
        // left
        <div className="vcenter">
          <h5>{ref.texts.left.header}:::</h5>
          <p className="card-text">{ref.texts.left.content}</p>
        </div>
      } riteContent={
        // right
        <div>
          <form ref="login_form" onSubmit={this.submitForm.bind(this)}>
            <input type="hidden" ref="token" id="token" name="token" value={this.state.token} />
            <div className="col-11 offset-1 row">&nbsp;</div>
            <div className="col-11 offset-1 row name">
              <h4 className="card-title-grey">{ref.texts.login.headerName}</h4>
              <div className="col-12">
                <input type="text" className="centering" ref="name" name="name" id="name" /> 
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
                    <div className="col-3"><input type="text" ref="prefix" id="prefix" name="prefix" value={ref.client.prefix} disabled="disabled" /></div>
                    <div className="col-8">{maskedPhone}<input type="text" ref="number" id="number" name="number" /></div>
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
