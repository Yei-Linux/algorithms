const { getLength } = require('../nested-arrays');
const { assert } = require('./helper');

describe('Nested Array', () => {
  it('First case', () => {
    assert.assertEquals(getLength([1, [2, 3]]), 3);
    assert.assertEquals(getLength([1, [2, [3, 4]]]), 4);
    assert.assertEquals(getLength([1, [2, [3, [4, [5, 6]]]]]), 6);
    assert.assertEquals(getLength([1, [2], 1, [2], 1]), 5);
  });
});
