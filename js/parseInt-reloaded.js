/**
 * https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5/train/javascript
 *
 * 1. Search in my vocabulary the letter number
 * 2. Two cases:
 *  2.1 If found
 *    2.1.1 Return the value
 *
 *  2.2 If not found "two hundred forty-six"
 *    2.2.1 Split and reverse the array : [forty-six, hundred, two] -> 46 , 100 , 2
 *    2.2.2 If the word is: hundred, thousand or million -> multiply by the next item and add to the acc
 *    2.2.3 If the word is normal number only add to the acc
 *
 * 3 If the word is equals to and, ignore it and continue to the next
 *
 * 4 Two cases:
 *  4.1 Hundred is before than 1000
 *    4.1.1 Two hundred eighty-tree-> 200(*1) + 83(acc)
 *  4.2 Hundred is after thant 1000
 *    4.2.1 Two hundred eighty-tree thousand -> 200(*1000) + 83000(acc)
 *
 * "seven hundred eighty-three thousand nine hundred and nineteen"
 * [nineteen,and,hundred,nine,thousand,eighty-three,hundred,seven]
 * 19 + 100 * 9 + 1000 * 83 + 100 * 7
 *
 * @param {*} string
 */

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
  fifteen: 15,
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
  hundredthousand: 1000 * 100,
  million: 1000000,
};

function parseInt(string) {
  const integer = isInVocab(string);
  if (integer) return integer;

  const numberStringReversed = string
    .replace(/hundred thousand/g, 'hundredthousand')
    .split(' ')
    .filter((letter) => letter !== 'and')
    .reverse();

  let acc = 0;
  const keywordsFor = ['hundred', 'thousand', 'million', 'hundredthousand'];

  for (let i = 0; i < numberStringReversed.length; i++) {
    const letterNumber = numberStringReversed[i];
    const integer = isInVocab(letterNumber);

    if (!integer) {
      continue;
    }

    if (keywordsFor.includes(letterNumber)) {
      const next = numberStringReversed[i + 1];
      if (!next) continue;

      const nextInteger = isInVocab(next);
      if (!nextInteger) {
        continue;
      }

      const newIntComposeValue = getLetterWhenAccIsMajorThanKeywordLetter(
        integer * nextInteger,
        acc,
        letterNumber
      );
      acc += newIntComposeValue;
      i++;
      continue;
    }

    acc += integer;
  }

  return acc;
}

const getLetterWhenAccIsMajorThanKeywordLetter = (
  number,
  acc,
  letterNumber
) => {
  if (letterNumber !== 'hundred') return number;
  if (acc < 1000) return number;
  return number * 1000;
};

const isInVocab = (string) => {
  const integer = vocabulary[string];

  if (integer !== undefined) return integer;
  if (!string.includes('-')) return undefined;

  const [decimal, digit] = string.split('-');
  const decimalInt = vocabulary[decimal];
  if (decimalInt === undefined) return undefined;
  const digitInt = vocabulary[digit];
  if (digitInt === undefined) return undefined;

  return decimalInt + digitInt;
};

module.exports = { parseInt };
