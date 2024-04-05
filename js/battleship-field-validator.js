/**
 * Battleship field validator: https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript
 *
 * 0. Valid the matrix size
 * 1.Create a copy of the field and iterate the matrix in one direction(down)
 * 2.Then when we find a ship we have to do:
 *  2.1 Identify in which direction we want to iterate(when we complete to iterate , should continue at the start direction)
 *  2.2 Verify edge and corners cells. In case is invalid stop and return false. If not, set the near cells(corner-edges) with X and set it in the shadow copy.
 *  2.3 When we continue the iteration verify if the cell is valid in the shadow copy.
 * 3. If the iteration is completed so return true.
 * @param {*} field
 */
function validateBattlefield(field) {
  const [x, y] = [field.length, field[0].length];

  if (x !== 10 || y !== 10) {
    return false;
  }
  const rules = {
    battleship: {
      cellSizes: 4,
      size: 1,
    },
    cruisers: {
      cellSizes: 3,
      size: 2,
    },
    destroyers: {
      cellSizes: 2,
      size: 3,
    },
    submarines: {
      cellSizes: 1,
      size: 4,
    },
  };
  const shadowCopyField = field.slice();

  let inventary = {
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };
  let matrixStartPosition = null;
  let direction = '';

  for (let i = 0; i < field.length; i++) {
    let row = field[i];
    for (let j = 0; j < row.length; j++) {
      const col =
        direction && matrixPositionIJ
          ? direction !== 'left'
            ? matrixStartPosition
            : j
          : j;
      const cell = field[i][col];
      const nextCell = field[i][j + 1];
      const downNextCell = field[i + 1][j];

      const upNextCell = field[i - 1][j];

      if (cell !== 1) continue;
      if (!nextCell && !downNextCell) {
        if (direction && matrixPositionIJ) {
          const cellSizes =
            (direction === 'left' ? j : i) - matrixStartPosition;
          if (!inventary[cellSizes]) return false;
          inventary[cellSizes] += 1;
        }

        matrixPositionIJ = null;
        direction = '';
        continue;
      }

      if (!matrixPositionIJ) {
        direction = nextCell === 1 ? 'left' : downNextCell === 1 ? 'down' : '';
        matrixStartPosition =
          direction === 'left' ? j : direction === 'down' ? i : null;
      }

      if (direction === 'left' && nextCell === 1) {
        if (downNextCell === 1) {
          return false;
        }

        shadowCopyField[i + 1][j] = 'X';
      }

      if (direction === 'down' && downNextCell === 1) {
        if (nextCell === 1) {
          return false;
        }

        shadowCopyField[i][j + 1] = 'X';
      }
    }
  }
}

module.exports = { validateBattlefield };
