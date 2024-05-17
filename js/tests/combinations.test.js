const { combinations } = require('../combinations');
const { assert } = require('./helper');

describe('Combination Test', () => {
  it('First case', () => {
    assert.assertEquals(combinations(2, 3), 6);
    assert.assertEquals(combinations(3, 7, 4), 84);
    assert.assertEquals(combinations(2, 3, 4, 5), 120);
  });
});
