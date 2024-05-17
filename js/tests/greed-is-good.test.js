const { score } = require('../greed-is-good');
const { assert } = require('./helper');

describe('Greed is Good', () => {
  it('First case', () => {
    assert.assertEquals(score([2, 3, 4, 6, 2]), 0);
    assert.assertEquals(score([4, 4, 4, 3, 3]), 400);
    assert.assertEquals(score([2, 4, 4, 5, 4]), 450);
    assert.assertEquals(score([1, 1, 2, 3, 6]), 200);
    assert.assertEquals(score([1, 1, 1, 1, 2]), 1100);
    assert.assertEquals(score([1, 1, 1, 3, 3]), 1000);
    assert.assertEquals(score([1, 1, 1, 5, 5]), 1100);
    assert.assertEquals(score([5, 1, 5, 1, 1]), 1100);
  });
});
