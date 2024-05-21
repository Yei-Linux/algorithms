const { doBananas } = require('../bananas');
const { assert } = require('./helper');

describe('Bananas Test', () => {
  it('First case', () => {
    assert.deepEqual(doBananas('bban').sort(), ['b-an', '-ban'].sort());
    assert.deepEqual(doBananas('baan').sort(), ['ba-n', 'b-an'].sort());
  });
});
