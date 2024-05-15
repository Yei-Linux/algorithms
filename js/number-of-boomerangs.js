/**
 * https://edabit.com/challenge/b7iHQDw72zzkmgCun
 *
 * A boomerang is a V-shaped sequence that is either upright or upside down.
 * Specifically, a boomerang can be defined as: sub-array of length 3,
 * with the first and last digits being the same and the middle digit being different.
 *
 * Input: [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
 * Output: [3, 7, 3], [1, 5, 1], [2, -2, 2]
 *
 * Input: [1, 7, 1, 7, 1, 7, 1]
 * Output: [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
 *
 * @param {*} numbers
 */
function countBoomerangs(numbers) {
  const boomerangs = [];

  for (let i = 0; i < numbers.length; i++) {
    const [a, b, c] = numbers.slice(i, i + 3);
    if (a && b && c && a === c && b !== a) {
      boomerangs.push([a, b, c]);
    }
  }

  return boomerangs.length;
}

module.exports = { countBoomerangs };
