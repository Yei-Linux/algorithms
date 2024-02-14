/**
 * https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript
 *
 * Roman To Number:
 *
 * MCMXC
 *
 * 1000 + 900 + 90
 * 1000 - 100 + 1000 - 10 + 100
 */
class RomanNumerals {
  static symbolsEquivalents = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  static toRoman(num) {
    const symbols = RomanNumerals.symbolsEquivalents;
    let restNum = num;
    let roman = '';

    while (restNum > 0) {
      const symbolFound = Object.entries(symbols).find(
        ([key, value]) => restNum >= value
      );
      if (!symbolFound) return roman;

      restNum -= symbolFound[1];
      roman += symbolFound[0];
    }

    return roman;
  }

  static fromRoman(str) {
    const numbersConverted = [];
    const symbols = RomanNumerals.symbolsEquivalents;
    const romanSymbols = str.split('');

    for (let i = 0; i < romanSymbols.length; i++) {
      const symbol = romanSymbols[i];
      const currentValue = symbols[symbol];
      numbersConverted[i] = currentValue;

      if (i == 0) {
        continue;
      }

      const prev = romanSymbols[i - 1];
      const prevValue = symbols[prev];

      if (currentValue <= prevValue) {
        continue;
      }
      numbersConverted[i - 1] = prevValue * -1;
    }

    return numbersConverted.reduce((acc, item) => acc + item, 0);
  }
}

module.exports = {
  RomanNumerals,
};
