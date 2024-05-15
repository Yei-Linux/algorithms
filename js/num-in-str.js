/**
 * https://edabit.com/challenge/eCPim4XcssdZdvs32
 * @param {*} arr
 */
function numInStr(arr) {
  return arr.filter((item) => {
    const hasAnyNumber = item
      .split('')
      .find((character) => character && character != ' ' && !isNaN(character));
    return hasAnyNumber;
  });
}

module.exports = { numInStr };
