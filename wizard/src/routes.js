import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import LoginSPage from './components/LoginSPage';
import PreSPage from './components/PreSPage';
import PostSPage from './components/PostSPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="logins" component={LoginSPage}/>
    <Route path="presubmit" component={PreSPage}/>
    <Route path="postsubmit" component={PostSPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
