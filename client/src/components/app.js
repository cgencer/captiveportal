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
      jsonData: {
          loginShortcut: "",
          template: "",
          language: "",
          timerSecs: 0,
          flags: [],
          images: {},
          colors: {},
          texts: {
            left: {
              "header": "Adınız",
              "content": ""
            },
            footer: "",
            login: {
              "headerName": "",
              "headerPhone": "",
              "headerCountry": "",
              "agree": "",
              "button1": ""
            },
            loginShort: {
              "header": "",
              "button1": ""
            },
            preSubmit: {
              "headerTime": "",
              "headerCode": "",
              "button1": "",
              "button2": ""
            },
            postSubmit: {
              "header": "",
              "headerExtras1": "",
              "headerExtras2": "",
              "headerExtras3": "",
              "subHr": "",
              "subMin": "",
              "button1": ""
            }
          }
        }
      };
  }

  componentWillMount(){

    axios
    .post('http://localhost:3000/api/spit/out?rand='+Math.floor(Date.now() / 1000), {
      responseType: 'json',
      withCredentials: false,
      data: {
        token: location.hash
      },
    })
    .then( res => {
      if(
        res.statusText === "OK" &&
        res.data.data.hashCheck === "OK" &&
        location.hash === res.data.data.hash
      ) {
        this.setState({ 
          jsonData: res.data.data, 
          token: location.hash
        });
        browserHistory.push('/login-page');
      } 
    })
    .catch((err)=> {
    })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  handleRef(divElement) {
  }

  render() {
    return (this.props.location.pathname === '/') ? (
      <div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    ) : (
      <div ref={this.handleRef} className="home">
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
