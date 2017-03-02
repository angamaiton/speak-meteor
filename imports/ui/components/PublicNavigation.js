import React from 'react';
import { Link } from 'react-router';

const PublicNavigation = () => (
  <div className="nav-right">
    <Link to="/login" className="nav-item is-tab">Log in</Link>
    <Link to="/signup" className="nav-item is-tab">Sign up</Link>
  </div>
);

export default PublicNavigation;
