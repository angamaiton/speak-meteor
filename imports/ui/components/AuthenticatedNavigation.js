import React from 'react';
import { browserHistory, Link } from 'react-router';
// import { LinkContainer } from 'react-router-bootstrap';
// import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

// const userName = () => {
//   const user = Meteor.user();
//   const name = user && user.profile ? user.profile.name : '';
//   return user ? `${name.first} ${name.last}` : '';
// };

const AuthenticatedNavigation = () => (
  <div className="nav-right">
    <Link to="/vocab" className="nav-item is-tab" activeClassName="is-active">Vocabulary</Link>
    <Link to="/languages" className="nav-item is-tab" activeClassName="is-active">Languages</Link>
    <Link to="/documents" className="nav-item is-tab" activeClassName="is-active">Documents</Link>
    <Link className="nav-item is-tab" onClick={ handleLogout } activeClassName="is-active">
    Log out
    </Link>
  </div>
);

export default AuthenticatedNavigation;
