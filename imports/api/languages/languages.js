import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Languages = new Mongo.Collection('Languages');
export default Languages;

Languages.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Languages.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Languages.schema = new SimpleSchema({
  name: {
    type: String,
    label: "The language's name.",
  },
  description: {
    type: String,
    label: "The language's description.",
  },
  ancestorLanguage: {
    type: String,
    label: 'The oldest common ancestor of this language.',
  },
});

Languages.attachSchema(Languages.schema);

Factory.define('language', Languages, {
  name: () => 'Factory Name',
  description: () => 'Factory Description',
  ancestorLanguage: () => 'Factory Ancestor',
});
