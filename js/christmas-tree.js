/**
 * 4 * 2 - 1 = 7
 * startPosition - 1
 *
 * - - - 1 - - -
 * - - 2 - 3 - -
 * - 1 - 2 - 3 -
 * 1 - 2 - 3 - 1
 *
 * https://adventjs.dev/es/challenges/2023/10
 */
function createChristmasTree(ornaments, height) {
  let ornamentsArray = ornaments.split('');
  const positions = height * 2 - 1;

  let treeBase = '';
  let treeStr = '';
  for (let i = 0; i < height; i++) {
    const sizeByRow = i + 1;
    let currentSizeByRowAcc = 0;
    let newPositionAllowable = height - sizeByRow;
    for (let j = 0; j < positions; j++) {
      if (j === newPositionAllowable && currentSizeByRowAcc < sizeByRow) {
        newPositionAllowable += 2;
        currentSizeByRowAcc += 1;
        const item = ornamentsArray.shift();
        ornamentsArray.push(item);

        if (i === 0) {
          treeBase = treeStr + '|';
        }

        treeStr += item;
        continue;
      }

      treeStr += currentSizeByRowAcc < sizeByRow ? ' ' : '';
    }
    treeStr += '\n';
  }

  return treeStr + treeBase + '\n';
}

module.exports = { createChristmasTree };
