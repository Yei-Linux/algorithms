/**
 *
 * https://edabit.com/challenge/GGDMJ33wg8y3EHQfP
 * @param {*} tree
 * @param {*} val
 */
function valueInTree(tree, val) {
  let clonedArray = [...tree];

  while (clonedArray.length > 0) {
    const first = clonedArray.shift();
    if (first === val) {
      return true;
    }

    const isArray = Array.isArray(first);
    if (isArray) {
      clonedArray = [...first, ...clonedArray];
    }
  }

  return false;
}

module.exports = { valueInTree };
