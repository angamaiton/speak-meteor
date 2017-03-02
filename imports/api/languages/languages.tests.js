/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import Languages from './languages';

describe('Languages collection', function () {
  it('registers the collection with Mongo properly', function () {
    assert.equal(typeof Languages, 'object');
  });
});
