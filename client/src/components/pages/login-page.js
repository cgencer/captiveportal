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
      props: props,
      lang: props.location.query.lang,
      hash: props.location.query.hash,
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
      let onlyPhone = this.refs.masked.value + this.refs.number.value;
      let dataset = {
        token: this.state.token,
        phone: this.refs.prefix.value + onlyPhone,
        name: this.refs.name.value
      }
      this.setState({ data: dataset });

      var diz = this;
      if(diz.state.jsonData.client.phone === onlyPhone) {
        axios({
          method: 'POST',
          baseURL: 'http://localhost:3000/api/',
          url: '/prelogin',
          data: dataset
        }).then(function (response) {
          if(response.data.result === "OK") {
            if(diz.state.jsonData.client.phone !== ''
              && diz.state.jsonData.config.maskedLogin === true
            ) {
              browserHistory.push('/post-submit-page');
            }else{
              browserHistory.push('/pre-submit-page');
            }
          } 
        }).catch(function(error) {
          console.log(error);
        });
      }else{
          this.refs.number.value = '';
//        browserHistory.push('/login-page?hash='+diz.state.hash+'&lang='+diz.state.lang);        
      }
    }
  }

  allFlags(hash) {
    var diz = this;
    return (
      <div>
        <div className="row">      
        {this.state.jsonData.flags.map(function(daflag, index) {
          const flagStyle= 'flag flag-' + daflag;
          const rows = ((index % 3 === 0) && (index !== 0)) ? '</div><div className="row">' : '';
          const linko = '/?hash=' + hash + '&lang=' + diz.state.jsonData.flags[index];
          return <a className="dropdown-item col-4" href={linko}><div className={flagStyle} alt={daflag}></div></a>
        })}
        </div>
      </div>
    );
  }

  conditional(maskedPhone, ref) {
    return (maskedPhone=='') ? (
      <div className="col-11 offset-1 row name">
        <h4 className="card-title-grey">{ref.texts.login.headerName}</h4>
        <div className="col-12">
          <input type="text" className="centering" ref="name" name="name" id="name" /> 
        </div>
      </div>
    ) : (
      <div className="col-11 offset-1 row name">
        <h4 className="card-title-grey">{ref.texts.login.greet}</h4>
        <div className="col-12">
          <input type="hidden" className="centering" ref="name" name="name" id="name" value={ref.client.name} /> 
          {ref.client.name}
          <p><small>{ref.texts.login.input}</small></p>
        </div>
      </div>
    );
  };

  render() {
    const ref = this.state.jsonData;

    let headerCSS = {color: ref.colors.text.header};
    let subCSS = {color: ref.colors.text.sub};
    let inputCSS = {color: ref.colors.text.input};

    let maskedPhone = (ref.client.phone !== '' && ref.config.maskedLogin === true) ?
      ref.client.phone.substr(0, ref.client.phone.length-2) : '';
    let maxlen = (maskedPhone !== '') ? '2' : '10';
    let maskedCSS = (maskedPhone !== '') ? {
        width: '35%', 
        backgroundColor: '#ccc',
        paddingLeft: '4px',
        paddingRight: '4px',
      } : {
        width: '100%'
      }; 

    return (
      <Card 
        logo={ref.images.logo} 
        logoStyle={{backgroundColor: ref.colors.back.logo}}
        leftStyle={{backgroundColor: ref.colors.back.left}} 
        rightStyle={{backgroundColor: ref.colors.back.rite}} 
        sub={subCSS}
        leftContent={
        // left
        <div className="vcenter">
          <h5>{ref.texts.left.header}</h5>
          <p className="card-text">{ref.texts.left.content}</p>
        </div>
      } riteContent={
        // right
        <div>
          <form ref="login_form" onSubmit={this.submitForm.bind(this)}>
            <input type="hidden" ref="token" id="token" name="token" value={this.state.token} />
            <div className="col-11 offset-1 row">&nbsp;</div>

            {this.conditional(maskedPhone, ref)}

            <div className="col-12 row">&nbsp;</div>
            <div className="col-11 offset-1">

              <div className="container-fluid row">

                <div className="col-12 colPhone">
                  <h4 className="card-title-grey">{ref.texts.login.headerPhone}</h4>
                  <div className="col-12 row">
                  <div className="btn-group">
                    <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">country</span> 
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      {this.allFlags(this.state.hash)}
                    </div>
                  </div>
                    <div className="col-3"><input type="text" ref="prefix" id="prefix" name="prefix" value={ref.client.prefix} disabled="disabled" /></div>
                    <input type="hidden" ref="masked" id="masked" name="masked" value={maskedPhone} />
                    <div className="col-8">{maskedPhone}<input type="text" ref="number" id="number" maxLength={maxlen} name="number" style={maskedCSS} /></div>
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
