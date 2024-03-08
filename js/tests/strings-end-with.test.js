const { stringsEndWith } = require('../strings-end-with');
const { assert } = require('./helper');

describe('StringsEndWith Test', () => {
  it('First case', () => {
    assert.isTrue(stringsEndWith('abc', 'bc'));
    assert.isNotTrue(stringsEndWith('abc', 'd'));
  });
});
