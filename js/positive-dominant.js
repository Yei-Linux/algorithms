/**
 * https://edabit.com/challenge/7pkKPYtTJzpxRMckZ
 * @param {*} items
 * @returns
 */
function isPositiveDominant(items) {
  const uniqueItems = [...new Set(items)].filter((item) => item !== 0);

  const positiveSize = uniqueItems.filter((item) => item >= 0).length;
  const negativeSize = uniqueItems.length - positiveSize;

  return positiveSize > negativeSize;
}

module.exports = { isPositiveDominant };
