const WORD_FOR_TEST = 'ban';
function solve(str, strModified, result, index, validatorArr) {
  let tempIndex = index;
  for (let i = 0; i < str.length; i++) {
    if (validatorArr[i]) {
      continue;
    }
    const isSameLikeWordAtIndex = WORD_FOR_TEST[tempIndex] === str[i];
    const nextIsSame = str[i + 1] ? str[i] === str[i + 1] : false;
    const prevIsSame = str[i - 1] ? str[i] === str[i - 1] : false;

    validatorArr[i] = true;

    if (!isSameLikeWordAtIndex) {
      strModified[i] = '-';
      continue;
    }
    const subWord = WORD_FOR_TEST.substring(0, tempIndex + 1);
    const subStrModified = strModified
      .substring(0, i)
      .concat(strModified[i])
      .replace(/-/g, '');
    const subStrModifiedPrev = strModified.substring(0, i).replace(/-/g, '');
    const verifySubWords = nextIsSame
      ? subWord === subStrModified
      : subWord === subStrModifiedPrev;
    if (!nextIsSame) {
      tempIndex + 1 < WORD_FOR_TEST.length && tempIndex++;
      if (i === 0) continue;
    }

    if ((nextIsSame || prevIsSame) && verifySubWords) {
      let arr = strModified.split('');
      arr[i] = '-';
      strModified = arr.join('');

      solve(str, strModified, result, tempIndex, validatorArr);

      arr[i] = str[i];
      strModified = arr.join('');

      for (let j = 0; j < validatorArr.length; j++) {
        if (j < i) continue;
        validatorArr[j] = false;
      }
    }
  }

  result.push(strModified);
}
function doBananas(str) {
  if (str.length < WORD_FOR_TEST.length) {
    return [];
  }
  if (str === WORD_FOR_TEST) {
    return [WORD_FOR_TEST];
  }

  const strModified = str;
  const result = [];
  let index = 0;
  const validatorArr = Array(str.length).fill(false);

  solve(str, strModified, result, index, validatorArr);

  return result.filter((item) => item !== str);
}

module.exports = { doBananas };
