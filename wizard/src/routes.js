import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import PreSPage from './components/PreSPage';
import PostSPage from './components/PostSPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="presubmit" component={PreSPage}/>
    <Route path="postsubmit" component={PostSPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
