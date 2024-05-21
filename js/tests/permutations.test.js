const { permutations } = require('../permutations');
const { assert } = require('./helper');

describe('Permutations Test', () => {
  it('First case', () => {
    assert.deepEqual(permutations([1, 2, 3]), [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });
});
