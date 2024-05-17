const { bishopsAndRooks } = require('../chess-fun-1');
const { assert } = require('./helper');

describe('ChessFun Test', () => {
  it('First case', () => {
    assert.assertEquals(
      bishopsAndRooks([
        [0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, -1, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, -1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [-1, 0, 0, 0, 0, 0, 0, 0],
      ]),
      17
    );
  });
});
