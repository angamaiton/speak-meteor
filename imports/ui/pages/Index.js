import React from 'react';
// import { Jumbotron } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

const Index = () => (
  <div className="home">
    <section className="section">
      <h3 className="title">Index</h3>
    </section>
  </div>
);

export default Index;
