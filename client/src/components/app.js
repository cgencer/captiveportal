import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import HeaderTemplate from './template/header';
import FooterTemplate from './template/footer';
import axios from 'axios';
const _ = require('lodash/core');
const queryString = require('query-string');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      path: props.location.pathname,
      token: '',
      props: props,
      data: {},
      jsonData: {
          loginShortcut: "",
          template: "",
          language: "",
          timers: {
            sms: 30,
            total: 2400       
          },
          client: {
            language: "tr",
            prefix: "+90",
            phone: ""
          },
          testValues: {
            "sms": "mc68k",
            "hash": "123qwe#"
          },
          flags: [],
          images: {},
          colors: {},
          texts: {
            left: {},
            footer: "",
            login: {},
            loginShort: {},
            preSubmit: {},
            postSubmit: {}
          }
        }
      };
  }

  componentWillMount(){

//    var hash = location.hash.substr(1, location.hash.length);
    var hash = this.state.props.location.query.hash;
    var lang = this.state.props.location.query.lang;
    lang = (lang !== 'undefined' || lang === "") ? 'tr' : lang;

    axios({
      method: 'POST',
      baseURL: 'http://localhost:3000/api/',
      url: '/spit/out?rand='+Math.floor(Date.now() / 1000),
      data: {token: hash, lang: lang},
    }).then(res => {
      if(
        res.statusText === "OK" &&
        res.data.data.config.hashCheck === "OK" &&
        hash === res.data.data.testValues.hash
      ) {
        this.setState({ 
          jsonData: res.data.data, 
          token: hash
        });
        browserHistory.push('/login-page?hash='+hash+'&lang='+lang);
      } 
    }).catch(function(error) {
      console.log(error);
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  uuid() {
    var i, random;
    var uuid = '';
    for (i = 0; i < 32; i++) {
      random = Math.random() * 16 | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      }
      uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return uuid;
  }

  render() {
    const ref = this.state.jsonData;

    return (this.props.location.pathname === '/') ? (
      <div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    ) : (
      <div className="home">
        <div className="container">
          {React.cloneElement(this.props.children, this.state)}
        </div>
        <FooterTemplate />
      </div>
    );
  }

}
App.defaultProps = {
  displayName: 'App Root'
}
export default App;
