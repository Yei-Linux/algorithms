/**
 * https://edabit.com/challenge/tRx22rECqK4dTJTg8
 * @param  {...any} itemsArr
 * @returns
 */
function combinations(...itemsArr) {
  return itemsArr.reduce((acc, item) => acc * Math.max(1, item), 1);
}

module.exports = { combinations };
