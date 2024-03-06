/**
 * https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5/train/javascript
 *
 *
 * one
 * two
 * ...
 * twenty
 *
 * @param {*} string
 */
function parseInt(string) {
  const vocabulary = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifhteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
  };

  const integer = vocabulary[string];
  if (integer) return integer;

  const numberStringReversed = string.split(' ').reverse();

  const parsedValue = numberStringReversed.reduce((acc, item) => {
    if (item === 'and') return acc;
    const hasSeparator = item.includes('-');
    if (hasSeparator) {
      const [left, right] = item.split('-');
      return acc + vocabulary[left] + vocabulary[right];
    }
    const integerItem = vocabulary[item];
    return acc + integerItem;
  }, 0);

  return parsedValue;
}

module.exports = { parseInt };
