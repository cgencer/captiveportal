import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class FooterTemplate extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li key={1}>
          <Link to="/">Home</Link>
        </li>,
        <li key={2}>
          <Link to="login-page">Login</Link>
        </li>,
        <li key={3}>
          <Link to="login-short-page">SLogin</Link>
        </li>,
        <li key={4}>
          <Link to="pre-submit-page">PreSubmit</Link>
        </li>,
        <li key={5}>
          <Link to="post-submit-page">PostSubmit</Link>
        </li>,
        <li key={6}>
          <Link to="register">Register</Link>
        </li>,
      ];
    } else {
      return [
        // Unauthenticated navigation
         <li key={1}>
          <Link to="/">Home</Link>
        </li>,
        <li key={2}>
          <Link to="login-page">Login</Link>
        </li>,
        <li key={3}>
          <Link to="login-short-page">SLogin</Link>
        </li>,
        <li key={4}>
          <Link to="pre-submit-page">PreSubmit</Link>
        </li>,
        <li key={5}>
          <Link to="post-submit-page">PostSubmit</Link>
        </li>,
        <li key={6}>
          <Link to="register">Register</Link>
        </li>,
      ];
    }
  }

  render() {
    const d = new Date();
    const year = d.getFullYear();

    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav>
                <ul className="footer-nav">
                  {this.renderLinks()}
                </ul>
              </nav>
              <p className="copyright">© {year}, Your Site. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, null)(FooterTemplate);
