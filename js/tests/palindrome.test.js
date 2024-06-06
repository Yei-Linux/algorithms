const { getIndexsForPalindrome } = require('../palindrome');
const { assert } = require('./helper');

describe('Palindrome Test', () => {
  it('First case', () => {
    assert.deepEqual(getIndexsForPalindrome('anna'), []);
    assert.deepEqual(getIndexsForPalindrome('abab'), [0, 1]);
    assert.deepEqual(getIndexsForPalindrome('abac'), null);
  });
});
