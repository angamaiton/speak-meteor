import React from 'react';
import { browserHistory } from 'react-router';

const handleNav = (_id) => {
  browserHistory.push(`/languages/${_id}`);
};

const LanguagesList = ({ languages }) => (
  languages.length > 0 ? <aside className="menu"><ul className="menu-list">
    {languages.map(({ _id, name }) => (
      <li key={ _id } onClick={ () => handleNav(_id)}><a>{ name }</a></li>
    ))}</ul></aside> :
  <div className="notification is-warning">You haven't added any languages yet!</div>
);

LanguagesList.propTypes = {
  languages: React.PropTypes.array,
};

export default LanguagesList;

