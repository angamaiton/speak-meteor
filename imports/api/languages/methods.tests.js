/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import Languages from './languages';
import { upsertLanguage } from './methods';

describe('Languages methods', () => {
  beforeEach(() => {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a language into the Languages collection', () => {
    upsertLanguage.call({
      name: 'French',
      description: 'Hello there.',
    });

    const getLanguage = Languages.findOne({ name: 'French' });
    assert.equal(getLanguage.description, 'Hello there.');
  });
});
