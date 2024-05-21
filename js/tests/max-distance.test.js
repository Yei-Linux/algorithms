const { maxDistance } = require('../max-distance');
const { assert } = require('./helper');

describe('Max Distance Reverse', () => {
  it('First case', () => {
    assert.assertEquals(maxDistance('>>*<'), 2);
    assert.assertEquals(maxDistance('<<<>'), 2);
    assert.assertEquals(maxDistance('>***>'), 5);
  });
});
