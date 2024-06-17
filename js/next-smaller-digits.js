/**
 * Plan:
 * 21 -> 12
 * 531 -> 513  ...,315,351,153,135
 * 2071 -> 2017 ....
 *
 * 1. convert it into array and Iterate it
 * 2. When it has just two digits just to reverse it
 * 3. When it has more than two digits start iterating
 * 4. Function where generate the permutations (diagram logic)
 * 5. Permutations will be in an array
 * 6. Filter permutations that are greater than n
 * 7. Finally sort and get the next smaller number
 * 8. If number has not the same digits size will return -1 if not return the number
 *
 * Kata: https://www.codewars.com/kata/5659c6d896bc135c4c00021e/train/javascript
 *
 * @param {*} n
 * @returns
 */
function nextSmaller(n) {
  const hasSameDigitsThanN = (numberCompare) => {
    return numberCompare.toString().length === n.toString().length;
  };

  const validatorNextNumber = (newNumber, result) => {
    if (newNumber >= n) return false;

    if (!result) return true;
    return newNumber > result;
  };

  const isLessThanResultByDigit = (permutationArray, result) => {
    if (!result) return false;
    if (!permutationArray.length) return false;
    const comparedNumber = +permutationArray.join('');

    const resultDigits = result
      .toString()
      .split('')
      .slice(0, permutationArray.length)
      .join('');

    return comparedNumber < +resultDigits;
  };

  const validateResponse = (numberCompare) => {
    const hasSameDigits = hasSameDigitsThanN(numberCompare);
    if (hasSameDigits) {
      return numberCompare;
    }

    return -1;
  };

  let result = null;
  const getPermutations = (
    permutationArray,
    validatorArray,
    array,
    isFirstIterationLevel,
    initialDigit
  ) => {
    if (permutationArray.length === array.length) {
      const newNumber = +permutationArray.join('');
      const isValidNextNumberToOverride = validatorNextNumber(
        newNumber,
        result
      );
      if (isValidNextNumberToOverride) {
        result = newNumber;
      }
      return;
    }

    for (let i = 0; i < array.length; i++) {
      if (validatorArray[i]) continue;
      const item = array[i];
      if (isFirstIterationLevel && item == 0) continue;

      const isLessThanResult = isLessThanResultByDigit(
        permutationArray,
        result
      );

      if (isFirstIterationLevel && item > initialDigit) continue;
      if (isLessThanResult) continue;

      validatorArray[i] = true;
      permutationArray.push(item);
      getPermutations(
        permutationArray,
        validatorArray,
        array,
        false,
        initialDigit
      );
      permutationArray.pop();
      validatorArray[i] = false;
    }
  };

  const array = n.toString().split('');
  if (array.length <= 2) {
    const reversedN = +array.slice().reverse().join('');
    return validateResponse(reversedN);
  }

  const initialDigit = array[0];
  const permutationArray = [];
  const validatorArray = Array(array.length)
    .fill()
    .map((item) => false);
  getPermutations(permutationArray, validatorArray, array, true, initialDigit);

  return result ? validateResponse(+result) : -1;
}

module.exports = { nextSmaller };
