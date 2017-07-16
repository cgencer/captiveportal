import React, { Component } from 'react';
import HeaderTemplate from './template/header';
import FooterTemplate from './template/footer';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.componentDidMount();
  }

  componentDidMount(){
    axios
    .get('http://localhost:3000/api/spit/out?rand='+Math.floor(Date.now() / 1000))
    .then( res => {
      this.setState({ jsonData: res.data.data });
      console.log(res.data);
      this.setState(this.state);
//    this.forceUpdate();
    })
    .catch((err)=> {})
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        <div className="container">
          {React.cloneElement(this.props.children, {jsonData: this.state.jsonData})}
        </div>

        <FooterTemplate />
      </div>
    );
  }

}

export default App;
