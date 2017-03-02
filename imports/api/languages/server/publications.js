import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Languages from '../languages';

Meteor.publish('languages.list', () => Languages.find());

Meteor.publish('languages.view', (_id) => {
  check(_id, String);
  return Languages.find(_id);
});
