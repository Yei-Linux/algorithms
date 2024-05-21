const { organizeGifts } = require('../organize-gifts');
const { assert } = require('./helper');

describe('Organize gifts', () => {
  it('First case', () => {
    assert.assertEquals(organizeGifts(`76a11b`), '[a]{a}{a}(aaaaaa){b}(b)');
  });
});
