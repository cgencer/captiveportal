import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Import miscellaneous routes and other requirements
import App from './components/app';
import NotFoundPage from './components/pages/not-found-page';

// Import static pages
import HomePage from './components/pages/home-page';
import LoginPage from './components/pages/login-page';
import LoginShortPage from './components/pages/login-short-page';
import PreSubmitPage from './components/pages/pre-submit-page';
import PostSubmitPage from './components/pages/post-submit-page';

// Import authentication related pages
import Login from './components/auth/login';
import Logout from './components/auth/logout';

// Import higher order components
import RequireAuth from './components/auth/require_auth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="login" component={Login} />
    <Route path="logout" component={Logout} />

    <Route path="login-page" component={LoginPage} />
    <Route path="login-short-page" component={LoginShortPage} />
    <Route path="pre-submit-page" component={PreSubmitPage} />
    <Route path="post-submit-page" component={PostSubmitPage} />

    <Route path="*" component={NotFoundPage} />
  </Route>
);
