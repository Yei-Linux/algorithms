/**
 * https://adventjs.dev/es/challenges/2023/8
 * `76a11b` : '[a]{a}{a}(aaaaaa){b}(b)'
 * @param {*} gifts
 * @returns
 */
function organizeGifts(gifts) {
  function organize(letter, textNumber) {
    const number = +textNumber;

    const boxes = Math.floor(number / 10);
    const giftsRemain = number % 10;

    const pales = Math.floor(boxes / 5);
    const boxesRemain = boxes % 5;

    return `${Array(pales).fill(`[${letter}]`).join('')}${Array(boxesRemain)
      .fill(`{${letter}}`)
      .join('')}${
      giftsRemain > 0 ? '('.padEnd(giftsRemain + 1, letter).concat(')') : ''
    }`;
  }

  let index = 0;
  let text = '';
  let worked = '';

  for (let i = 0; i < gifts.length; i++) {
    if (isNaN(+gifts[i])) {
      text = gifts.slice(index, i);
      index = i + 1;
      const result = organize(gifts[i], text);
      worked += result;
      continue;
    }
  }

  return worked;
}

module.exports = { organizeGifts };
