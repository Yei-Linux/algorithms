function drawGift(size, symbol) {
  const total = size * 2 - 1;
  let isReversed = false;
  let strResponse = '';
  const resultArr = Array(total)
    .fill()
    .map((_, i) => [...Array(total).fill(size - 1 <= i ? '' : ' ')]);

  for (let i = 0; i < total; i++) {
    for (
      let j = isReversed ? 0 : Math.max(0, size - i - 1);
      j < (isReversed ? Math.max(1, total - (i - size + 1)) : total);
      j++
    ) {
      if (
        i === 0 ||
        i === total - 1 ||
        (i === size - 1 && j < size) ||
        j === (isReversed ? 0 : Math.max(0, size - i - 1)) ||
        j ===
          (isReversed ? Math.max(1, total - (i - size + 1) - 1) : total - 1) ||
        (isReversed && j === size - 1) ||
        (!isReversed && i !== 0 && j - size + 1 === Math.max(0, size - i - 1))
      ) {
        resultArr[i][j] = '#';
      } else {
        resultArr[i][j] = symbol;
      }
    }
    if (size - 1 === i && !isReversed) {
      isReversed = true;
    }

    strResponse += resultArr[i].join('') + '\n';
  }

  return strResponse;
}

module.exports = { drawGift };
