const { parseInt } = require('../parseInt-reloaded');
const { assert } = require('./helper');

describe('Tests', () => {
  it('test', () => {
    assert.assertEquals(parseInt('one'), 1);
    assert.assertEquals(parseInt('twenty'), 20);
    assert.assertEquals(parseInt('two hundred forty-six'), 246);
    assert.assertEquals(
      parseInt('seven hundred eighty-three thousand nine hundred and nineteen'),
      783919
    );
    assert.assertEquals(parseInt('one hundred thousand seven'), 100007);
    assert.assertEquals(parseInt('seven hundred thousand'), 700000);
  });
});
