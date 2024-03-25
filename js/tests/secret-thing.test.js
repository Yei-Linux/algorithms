const { recoverSecret } = require('../secret-thing');
const { assert } = require('./helper');

describe('Secret Thing', () => {
  it('Basic Tests', () => {
    const secret1 = 'whatisup';
    const triplets1 = [
      ['t', 'u', 'p'],
      ['w', 'h', 'i'],
      ['t', 's', 'u'],
      ['a', 't', 's'],
      ['h', 'a', 'p'],
      ['t', 'i', 's'],
      ['w', 'h', 's'],
    ];
    assert.assertEquals(recoverSecret(triplets1), secret1);

    const secret2 = 'mathisfun';
    const triplets2 = [
      ['t', 's', 'f'],
      ['a', 's', 'u'],
      ['m', 'a', 'f'],
      ['a', 'i', 'n'],
      ['s', 'u', 'n'],
      ['m', 'f', 'u'],
      ['a', 't', 'h'],
      ['t', 'h', 'i'],
      ['h', 'i', 'f'],
      ['m', 'h', 'f'],
      ['a', 'u', 'n'],
      ['m', 'a', 't'],
      ['f', 'u', 'n'],
      ['h', 's', 'n'],
      ['a', 'i', 's'],
      ['m', 's', 'n'],
      ['m', 's', 'u'],
    ];
    assert.assertEquals(recoverSecret(triplets2), secret2);
  });
});
