/**
 * https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH
 * @param {*} num
 */
function oddishOrEvenish(num) {
  const sum = num
    .toString()
    .split('')
    .reduce((acc, item) => {
      return acc + +item;
    }, 0);

  return sum % 2 === 0 ? 'Evenish' : 'Oddish';
}

module.exports = { oddishOrEvenish };
