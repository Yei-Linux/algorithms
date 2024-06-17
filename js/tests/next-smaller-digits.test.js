const { decode } = require('../brackets-reverse');
const { nextSmaller } = require('../next-smaller-digits');
const { assert } = require('./helper');

describe('Next Smaller Digit', () => {
  it('First case', () => {
    assert.assertEquals(nextSmaller(21), 12);
    assert.assertEquals(nextSmaller(907), 790);
    assert.assertEquals(nextSmaller(531), 513);
    assert.assertEquals(nextSmaller(135), -1);
    assert.assertEquals(nextSmaller(2071), 2017);
    assert.assertEquals(nextSmaller(1027), -1);
    assert.assertEquals(nextSmaller(414), 144);
  });

  it('Bigger numbers', () => {
    assert.assertEquals(nextSmaller(123456798), 123456789);
    assert.assertEquals(nextSmaller(123456789), -1);
    assert.assertEquals(nextSmaller(1234567908), 1234567890);
  });
});
