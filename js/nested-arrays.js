/**
 * https://edabit.com/challenge/yXSTvCNen2DQHyrh6
 * @param {*} arr
 */
function getLength(arr) {
  let clonedArr = [...arr];
  let counter = 0;

  while (clonedArr.length > 0) {
    const item = clonedArr.shift();
    if (!item) break;

    if (!Array.isArray(item)) {
      counter++;
      continue;
    }

    clonedArr = [...item, ...clonedArr];
  }

  return counter;
}

module.exports = { getLength };
