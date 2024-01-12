function generateNewArrayForCompute(pyramid) {
  const newArrayForCompute = Array(pyramid.length).fill();

  for (let i = 0; i < pyramid.length; i++) {
    newArrayForCompute[i] = pyramid[i];
  }

  return newArrayForCompute;
}

function getSumFromEdges(newArrayForCompute) {
  const array = [...newArrayForCompute];
  for (let i = 1; i < array.length; i++) {
    array[i][0] = array[i][0] + array[i - 1][0];
  }

  for (let i = 1; i < array.length; i++) {
    array[i][array[i].length - 1] = array[i].at(-1) + array[i - 1].at(-1);
  }

  return array;
}

function getSumFromNotEdgesPosition(newArrayForCompute) {
  const array = [...newArrayForCompute];
  for (let i = 2; i < newArrayForCompute.length; i++) {
    for (let j = 1; j < newArrayForCompute[i].length - 1; j++) {
      const topLeftNext = array[i - 1] ? array[i - 1][j - 1] : 0;
      const topNext = array[i - 1] ? array[i - 1][j] : 0;
      array[i][j] =
        Math.max(
          isNaN(topLeftNext) ? 0 : topLeftNext,
          isNaN(topNext) ? 0 : topNext
        ) + array[i][j];
    }
  }

  return array;
}

function getMaxSumFromLastRow(newArrayForCompute) {
  return Math.max(...newArrayForCompute.at(-1));
}

/**
 * Link: https://www.codewars.com/kata/551f23362ff852e2ab000037/train/javascript
 * @param {
* } pyramid
* 
* Proposal Solution: 
* 
* 1. First find sum from left and right edges 
* 2. Then iterate in position that not belongs to the edges and generate the max sum for the position (we have to get the max from the parents)
¨* 3. Finally in the last row we have to get the max sum , computed before
*
* Another solutions with: ReduceRight
*/
function longestSlideDown(pyramid) {
  let newArrayForCompute = generateNewArrayForCompute(pyramid);
  newArrayForCompute = getSumFromEdges(newArrayForCompute);
  newArrayForCompute = getSumFromNotEdgesPosition(newArrayForCompute);

  return getMaxSumFromLastRow(newArrayForCompute);
}

module.exports = {
  longestSlideDown,
};
