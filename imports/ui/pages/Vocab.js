import React from 'react';
import { Link } from 'react-router';

const Vocab = () => (
  <div className="vocab">
    <section className="section">
      <nav className="level">
        <div className="level-left">
          <h1 className="title">Vocab</h1>
        </div>
        <div className="level-right">
          <Link to="add-language" className="button is-primary">Add Language</Link>
        </div>
      </nav>
      <hr />
      <div className="columns">

      </div>
    </section>
  </div>
);

export default Vocab;
