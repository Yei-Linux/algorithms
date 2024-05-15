const { oddishOrEvenish } = require('../oddish-or-evenish');
const { assert } = require('./helper');

describe('Oddish or Evenish', () => {
  it('First case', () => {
    assert.assertEquals(oddishOrEvenish(43), 'Oddish');
    assert.assertEquals(oddishOrEvenish(373), 'Oddish');
    assert.assertEquals(oddishOrEvenish(4433), 'Evenish');
  });
});
