/**
 * https://www.codewars.com/kata/5531abe4855bcc8d1f00004c/train/javascript
 *
 * Case 1:
 *  Input: '11 11 11 11 11 11 11 11 11 11'
 *  Ouput: 20
 *
 *  Case 2:
 *  Input: 'X X X X X X X X X XXX'
 *  Ouput: 300
 *
 * ---------------------
 *
 * Use Case Strike(X):
 * X   X    X    X     X     X     X     X     X   |   X    X    X
 * 30  60  90   120   150   180   210   240   270  |        300
 *
 *
 * X    33    7 -    2 /    3 /     X     X     51     1/   |    3    /   6
 * 16   22    29     42     62     88    114    120    133       149
 *
 *  * @param {*} frames
 *
 * Instrunctions:
 * 1. Split the frames to two groups the first nine frames and the last one in another group
 * 2. Iterate the first group:
 *  2.1. If we have a normal frame only add up to the current sum
 *  2.2 If we have a spare get the first item of next frame and operate like this: scoreTotal += (10 + nextFirstItem)
 *  2.3 If we have a strike get the next two items of next frame(s) and operate like this: scoreTotal += (10 + nextFirstItem + nextSecondItem)
 *      2.3.1 If the next item is strike: Get the ten points and iterate the next frame getting the first item
 *      2.3.2 If the next item is normal
 *  2.4 If we need items from the second group , proceed to get the next items
 *
 * 3. Iterate the second group
 *      3.1 Add up all the items of the second and concatenate to the current score: score += ( 10 + 6 )
 */
function bowlingScore(frames) {
  const framesArr = frames.split(' ');
  const firstGroup = framesArr.slice(0, 9);
  const secondGroup = framesArr.slice(-1);
  let scoreTotal = 0;

  for (let i = 0; i < firstGroup.length; i++) {
    const frame = firstGroup[i];

    if (frame !== 'X' && !frame.includes('/')) {
      const [bawlOne, bawlTwo] = getBawls(frame);
      scoreTotal += toInt(bawlOne) + toInt(bawlTwo);
      continue;
    }

    const nextFrame = firstGroup[i + 1];
    const nextBawls = getBawls(nextFrame ?? secondGroup[0]);
    if (frame.includes('/')) {
      scoreTotal += getScoreForSpare(nextBawls);
      continue;
    }

    const nextNextFrame = firstGroup[i + 2];
    const nextNextBawls = getBawls(nextNextFrame ?? secondGroup[0]);
    if (frame === 'X') {
      scoreTotal += getScoreForStrike(nextBawls, nextNextBawls);
      continue;
    }
  }

  const [one, two, three] = getBawls(secondGroup[0]);
  if (two === '/') {
    scoreTotal += 10 + toInt(three);
  } else {
    scoreTotal += toInt(one) + toInt(two) + toInt(three);
  }
  return scoreTotal;
}

function getBawls(frame) {
  const bawlOne = frame.slice(0, 1);
  const bawlTwo = frame.slice(1, 2);
  const bawlThree = frame.slice(2, 3);

  return [bawlOne, bawlTwo, bawlThree];
}

function toInt(bawl) {
  if (!bawl) return 0;
  if (bawl === 'X') return 10;
  return !isNaN(bawl) ? +bawl : 0;
}

function getScoreForSpare([nextBawlOne]) {
  return 10 + toInt(nextBawlOne);
}

function getScoreForStrike([nextBawlOne, nextBawlTwo], [nextNextBawlOne]) {
  if ([nextBawlOne, nextBawlTwo].includes('X')) {
    return 10 + 10 + toInt(nextNextBawlOne);
  }

  if ([nextBawlOne, nextBawlTwo].includes('/')) {
    return 10 + 10;
  }

  return 10 + (toInt(nextBawlOne) + toInt(nextBawlTwo));
}

module.exports = { bowlingScore };
