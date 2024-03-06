const { parseInt } = require('../parseInt-reloaded');
const { assert } = require('./helper');

describe('Tests', () => {
  it('test', () => {
    assert.assertEquals(parseInt('one'), 1);
    assert.assertEquals(parseInt('twenty'), 20);
    assert.assertEquals(parseInt('two hundred forty-six'), 246);
  });
});
