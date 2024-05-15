const { countBoomerangs } = require('../number-of-boomerangs');
const { assert } = require('./helper');

describe('Number of Boomerangs', () => {
  it('First case', () => {
    assert.assertEquals(countBoomerangs([9, 5, 9, 5, 1, 1, 1]), 2);
    assert.assertEquals(countBoomerangs([5, 6, 6, 7, 6, 3, 9]), 1);
    assert.assertEquals(countBoomerangs([4, 4, 4, 9, 9, 9, 9]), 0);
  });
});
