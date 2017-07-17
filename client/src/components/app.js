import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import HeaderTemplate from './template/header';
import FooterTemplate from './template/footer';
import axios from 'axios';
const _ = require('lodash/core');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      path: props.location.pathname,
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

  componentDidMount(){

    axios
    .get('http://localhost:3000/api/spit/out?rand='+Math.floor(Date.now() / 1000), {
      responseType: 'json',
      withCredentials: false,
      onDownloadProgress: event => {
        const progress = Math.round((event.loaded * 100) / event.total);
        if(progress == 100) browserHistory.push('/login-page');
      }
    })
    .then( res => {
      if(res.statusText === "OK") {
        this.setState({ jsonData: res.data.data, isLoaded: true });
        console.log(res.data);
      } 
    })
    .catch((err)=> {
    })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  handleRef(divElement) {
/*
    if(divElement && !_.isUndefined(this.state) && !this.state.isLoaded) {
      axios
      .get('http://localhost:3000/api/spit/out?rand='+Math.floor(Date.now() / 1000))
      .then( res => {
        this.setState({ jsonData: res.data.data });
        this.setState({ jsonLoaded: true });
        console.log(res.data);
//      this.setState(this.state);
      })
      .catch((err)=> {
      })
    }
*/
  }

  render() {
    return (this.props.location.pathname === '/') ?
      <div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    : (
      <div ref={this.handleRef} className="home">
        <div className="container">
          {React.cloneElement(this.props.children, this.state)}
        </div>
        <FooterTemplate />
      </div>
    );
  }

}

export default App;
