function deleteECharacter(word) {
  let wordArray = word.split('');
  let hasAnyE = wordArray.includes('e');

  while (hasAnyE) {
    const indexE = wordArray.findIndex((char) => char === 'e');
    if (indexE === -1) {
      hasAnyE = false;
      break;
    }

    wordArray = wordArray.filter((char, index) => {
      if (!indexE) {
        return index !== indexE;
      }

      return index !== indexE && index !== indexE - 1;
    });
  }

  return wordArray.join('');
}

console.log(deleteECharacter('east'))
console.log(deleteECharacter('proceed'))
