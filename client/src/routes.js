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
import ContactPage from './components/pages/contact-page';
import ComponentSamplesPage from './components/pages/component-samples';

// Import authentication related pages
import Register from './components/auth/register';
import Login from './components/auth/login';
import Logout from './components/auth/logout';

// Import dashboard pages
import Dashboard from './components/dashboard/dashboard';
import ViewProfile from './components/dashboard/profile/view-profile';

// Import admin pages
import AdminDashboard from './components/admin/dashboard';

// Import higher order components
import RequireAuth from './components/auth/require_auth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="contact-us" component={ContactPage} />
    <Route path="component-samples" component={RequireAuth(ComponentSamplesPage)} />
    <Route path="register" component={Register} />
    <Route path="login" component={Login} />
    <Route path="logout" component={Logout} />

    <Route path="login-page" component={LoginPage} />
    <Route path="login-short-page" component={LoginShortPage} />
    <Route path="pre-submit-page" component={PreSubmitPage} />
    <Route path="post-submit-page" component={PostSubmitPage} />

    <Route path="profile" component={RequireAuth(ViewProfile)} />

    <Route path="admin" component={RequireAuth(AdminDashboard)} />

    <Route path="dashboard">
      <IndexRoute component={RequireAuth(Dashboard)} />
    </Route>

    <Route path="*" component={NotFoundPage} />
  </Route>
);
