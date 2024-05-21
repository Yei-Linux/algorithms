function decode(message) {
  function reverseWord(subWord, start, validator) {
    for (let i = start; i < subWord.length; i++) {
      const char = subWord[i];

      if (char === ')' && !validator.includes(i)) {
        const tempReverse = subWord.slice(start, i).reverse();
        for (let j = start; j < i; j++) {
          validator.push(j);
          subWord[j] = tempReverse[j - start];
        }
        validator.push(i);
        return subWord;
      }

      if (char === '(' && !validator.includes(i)) {
        validator.push(i);
        reverseWord(subWord, i + 1, validator);
      }
    }

    return subWord;
  }

  return message
    .split(' ')
    .map((word) => {
      if (!word.includes('(')) {
        return word;
      }

      let newWord = word.split('');
      const validator = [];
      const start = 0;

      const subWord = reverseWord(newWord, start, validator).join('');

      return subWord.replace(/\(/g, '').replace(/\)/g, '');
    })
    .join(' ');
}

module.exports = { decode };
