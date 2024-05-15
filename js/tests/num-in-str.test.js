const { numInStr } = require('../num-in-str');
const { assert } = require('./helper');

describe('Num In String', () => {
  it('First case', () => {
    assert.deepEqual(numInStr(['1a', 'a', '2b', 'b']), ['1a', '2b']);
    assert.deepEqual(numInStr(['abc', 'abc10']), ['abc10']);
    assert.deepEqual(numInStr(['abc', 'ab10c', 'a10bc', 'bcd']), [
      'ab10c',
      'a10bc',
    ]);
    assert.deepEqual(numInStr(['this is a test', 'test1']), ['test1']);
  });
});
