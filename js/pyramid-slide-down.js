function generateNewArrayForCompute(pyramid) {
  const newArrayForCompute = Array(pyramid.length).fill();

  for (let i = 0; i < pyramid.length; i++) {
    newArrayForCompute[i] = Array(pyramid[i]);
  }

  return newArrayForCompute;
}

function getSumFromEdges(pyramid, newArrayForCompute) {
  const array = [...newArrayForCompute];
  for (let i = 1; i < pyramid.length; i++) {
    array[i][0] = pyramid[i][0] + pyramid[i - 1][0];
  }

  for (let i = 1; i < pyramid.length; i++) {
    array[i][array[i].length - 1] = pyramid[i].at(-1) + pyramid[i - 1].at(-1);
  }

  return array;
}

function getSumFromNotEdgesPosition(pyramid, newArrayForCompute) {
  const array = [...newArrayForCompute];
  for (let i = 2; i < pyramid.length; i++) {
    for (let j = 1; j < pyramid[i].length; j++) {
      const leftNext = array[i][j - 1];
      const topNext = array[i - 1] ? array[i - 1][j] : 0;
      array[i][j] = Math.max(leftNext, topNext);
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
*/
function longestSlideDown(pyramid) {
  let newArrayForCompute = generateNewArrayForCompute(pyramid);
  newArrayForCompute = getSumFromEdges(pyramid, newArrayForCompute);
  newArrayForCompute = getSumFromNotEdgesPosition(pyramid, newArrayForCompute);

  return getMaxSumFromLastRow(newArrayForCompute);
}

module.exports = {
  longestSlideDown,
};
