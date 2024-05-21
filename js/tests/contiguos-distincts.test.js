const { doBananas } = require('../bananas');
const { countContiguousDistinct } = require('../contiguos-distincts');
const { assert } = require('./helper');

describe('Contiguos Test', () => {
  it('First case', () => {
    assert.deepEqual(
      countContiguousDistinct(4, [1, 2, 1, 3, 4, 2, 3]),
      [3, 4, 4, 3]
    );
    assert.deepEqual(
      countContiguousDistinct(2, [1, 2, 1, 3, 4, 2, 3, 3]),
      [2, 2, 2, 2, 2, 2, 1]
    );
    assert.deepEqual(countContiguousDistinct(8, [1, 2, 1, 3, 4, 2, 3, 3]), [4]);
  });
});
