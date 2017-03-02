import React from 'react';
import { Link } from 'react-router';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';

const renderNavigation = hasUser => (hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />);

const AppNavigation = ({ hasUser }) => (
  <nav className="nav has-shadow">
    <div className="container">
      <div className="nav-left">
        <Link className="nav-item" to="/">
          <img src="logo2.png" alt="Bulma logo" />
        </Link>
      </div>
      {renderNavigation(hasUser)}
    </div>
  </nav>
);

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
};

export default AppNavigation;
