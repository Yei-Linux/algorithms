const { isPositiveDominant } = require('../positive-dominant');
const { assert } = require('./helper');

describe('isPositiveDominant Test', () => {
  it('First case', () => {
    assert.isNotTrue(isPositiveDominant([1, 1, 1, 1, -3, -4]));
    assert.isTrue(isPositiveDominant([5, 99, 832, -3, -4]));
    assert.isTrue(isPositiveDominant([5, 0]));
    assert.isNotTrue(isPositiveDominant([0, -4, -1]));
    assert.isNotTrue(isPositiveDominant([1, 0, 0, -1]));
  });
});
