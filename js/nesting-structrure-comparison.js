/**
 * https://www.codewars.com/kata/520446778469526ec0000001/train/javascript
 * Big Notation Recursion vs Iteration: https://stackoverflow.com/questions/35102510/big-o-complexity-recursion-vs-iteration
 * [1,[1,1]] -> [2,[2,2],[2]]
 *
 * - Clean the data inside of each item from the array: [1,[1,1]] -> [1,[1,1],[1]]
 *  - Recursion vs Iteration
 * - Then compare as string both strucutres
 *
 * @param {*} other
 */

/**
 * Recursion O(n^2)
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

/**
 * Iteration O(n)
 */
const cleanDataByIteration = (nestedArr) => {
  const stack = [nestedArr];

  while (stack.length > 0) {
    const current = stack.pop();

    for (let i = 0; i < current.length; i++) {
      if (Array.isArray(current[i])) {
        stack.push(current[i]);
        continue;
      }
      current[i] = 1;
    }
  }

  return nestedArr;
};

Array.prototype.sameStructureAs = function (other) {
  if (!Array.isArray(other)) return false;

  const current = this;

  //const newCurrent = cleanData([...current]);
  //const newOther = cleanData([...other]);

  const newCurrent = cleanDataByIteration([...current]);
  const newOther = cleanDataByIteration([...other]);

  const newOtherStr = JSON.stringify(newOther);
  const newCurrentStr = JSON.stringify(newCurrent);

  return newCurrentStr === newOtherStr;
};
