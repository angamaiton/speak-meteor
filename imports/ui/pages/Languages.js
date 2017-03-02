import React from 'react';
import LanguagesList from '../containers/LanguagesList';

const Languages = () => (
  <div className="languages">
    <section className="section">
      <h1 className="title">Languages</h1>
      <hr />
      <div className="columns">
        <div className="column is-3">
          <LanguagesList />
        </div>
      </div>
    </section>
  </div>
);

export default Languages;
