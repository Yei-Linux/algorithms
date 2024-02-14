const { RomanNumerals } = require('../roman-numerals-helper');
const { assert } = require('./helper');

describe('Roman Helper', () => {
  it('to', () => {
    assert.strictEqual(RomanNumerals.toRoman(1000), 'M');
    assert.strictEqual(RomanNumerals.toRoman(4), 'IV');
    assert.strictEqual(RomanNumerals.toRoman(1), 'I');
    assert.strictEqual(RomanNumerals.toRoman(1990), 'MCMXC');
    assert.strictEqual(RomanNumerals.toRoman(2008), 'MMVIII');
  });

  it('from', () => {
    assert.strictEqual(RomanNumerals.fromRoman('XXI'), 21);
    assert.strictEqual(RomanNumerals.fromRoman('I'), 1);
    assert.strictEqual(RomanNumerals.fromRoman('IV'), 4);
    assert.strictEqual(RomanNumerals.fromRoman('MMVIII'), 2008);
    assert.strictEqual(RomanNumerals.fromRoman('MDCLXVI'), 1666);
  });
});
