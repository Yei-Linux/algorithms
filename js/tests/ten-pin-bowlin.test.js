const { assert } = require('./helper');

const { bowlingScore } = require('../ten-pin-bowlin');

describe('Bownling Scoring Game Test', () => {
  it('Basic Tests', () => {
    assert.assertEquals(bowlingScore('11 11 11 11 11 11 11 11 11 11'), 20);
    assert.assertEquals(bowlingScore('X X X X X X X X X XXX'), 300);
    assert.assertEquals(bowlingScore('X 8/ 31 9/ 36 9/ 4/ 34 15 1/X'), 119);
  });
});
