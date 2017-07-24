import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import axios from 'axios';
const _ = require('lodash/core');

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: {},
      jsonData: {
          loginShortcut: "",
          template: "",
          language: "",
          timers: {},
          client: {
            language: "tr",
            prefix: "+90",
            phone: ""
          },
          testValues: {},
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

    axios({
      method: 'POST',
      baseURL: 'http://localhost:3000/api/',
      url: '/spit/out?rand='+Math.floor(Date.now() / 1000),
      data: {lang: 'tr'},
    }).then(res => {
      if(
        res.statusText === "OK"
      ) {
        this.setState({ 
          jsonData: res.data.data, 
          isLoaded: true
        });
//        browserHistory.push('/login-page?hash='+hash+'&lang='+lang);
      } 
    }).catch(function(error) {
      console.log(error);
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {
    return (
      <div>
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/login">Login</Link>
        {' | '}
        <Link to="/presubmit">Pre-submit</Link>
        {' | '}
        <Link to="/postsubmit">Post-submit</Link>
        <br/>
        <h1>Kron Captive Login Wizard</h1>
          {React.cloneElement(this.props.children, this.state)}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
