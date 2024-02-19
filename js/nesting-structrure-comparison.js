/**
 * https://www.codewars.com/kata/520446778469526ec0000001/train/javascript
 *
 * [1,[1,1]] -> [2,[2,2],[2]]
 *
 * - Clean the data inside of each item from the array: [1,[1,1]] -> [1,[1,1],[1]]
 *  - Recursion vs Iteration
 * - Then compare as string both strucutres
 *
 * @param {*} other
 */

const cleanData = (nestedArr) => {
  for (let i = 0; i < nestedArr.length; i++) {
    if (Array.isArray(nestedArr[i])) {
      cleanData(nestedArr[i]);
      continue;
    }
    nestedArr[i] = 1;
  }

  return nestedArr;
};

Array.prototype.sameStructureAs = function (other) {
  if (!Array.isArray(other)) return false;

  const current = this;

  const newCurrent = cleanData([...current]);
  const newOther = cleanData([...other]);

  const newOtherStr = JSON.stringify(newOther);
  const newCurrentStr = JSON.stringify(newCurrent);

  return newCurrentStr === newOtherStr;
};
