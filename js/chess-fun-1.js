/**
 * https://www.codewars.com/kata/58a3b28b2f949e21b3000001/train/javascript
 * @param {*} chessboard
 * @returns
 */
function bishopsAndRooks(chessboard) {
  for (let i = 0; i < chessboard.length; i++) {
    for (let j = 0; j < chessboard.length; j++) {
      const square = chessboard[i][j];
      const arePieces = [1, -1].includes(square);
      if (!arePieces) continue;
      const directions = directionsByPiece[square === 1 ? 'R' : 'B'];
      searchPieces(i, j, chessboard, directions);
    }
  }

  console.log('test', chessboard);

  const counterNoOccupiedSquare = chessboard.reduce((acc, arr) => {
    const sum = arr.reduce((acc, item) => {
      return acc + (item === 0 ? 1 : 0);
    }, 0);

    return acc + sum;
  }, 0);

  return counterNoOccupiedSquare;
}

const directionsByPiece = {
  B: ['LB', 'RT', 'LT', 'RB'],
  R: ['L', 'T', 'R', 'B'],
};

const methods = (i, j) => ({
  L: [i - 1, j],
  R: [i + 1, j],
  T: [i, j - 1],
  B: [i, j + 1],
  LB: [i - 1, j + 1],
  RT: [i + 1, j - 1],
  LT: [i - 1, j - 1],
  RB: [i + 1, j + 1],
});

function verifySquare(chessboard, i, j, direction) {
  if (i < 0 || i >= 8 || j < 0 || j >= 8) {
    return false;
  }

  const [newI, newJ] = methods(i, j)[direction];
  if (chessboard[i][j] === 2) {
    return false;
  }
  if (chessboard[i][j] === 0) {
    const thereIsAPiece = verifySquare(chessboard, newI, newJ, direction);
    if (thereIsAPiece) {
      chessboard[i][j] = 2;
      return true;
    }
  }
  if ([1, -1].includes(chessboard[i][j])) {
    return true;
  }

  return false;
}

function searchPieces(i, j, chessboard, directions) {
  while (directions.length > 0) {
    const direction = directions.shift();
    const [newI, newJ] = methods(i, j)[direction];
    verifySquare(chessboard, newI, newJ, direction);
  }
}

module.exports = { bishopsAndRooks };
