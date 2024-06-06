/**
 *
 * anna -> []
 * abab -> [1,2]
 * abac -> null
 *
 * @param {*} word
 * @returns
 */
function getIndexsForPalindrome(word) {
  const isPalindrome = (word) =>
    word === word.split('').slice().reverse().join('');
  if (isPalindrome(word)) return [];

  let wordArray = word.split('');
  for (let i = 0; i < wordArray.length; i++) {
    const current = wordArray[i];
    if (i + 1 >= wordArray.length) break;

    for (let j = i + 1; j < wordArray.length; j++) {
      const next = wordArray[j];
      if (!next) return null;

      wordArray[i] = next;
      wordArray[j] = current;

      if (isPalindrome(wordArray.join(''))) {
        return [i, j];
      }

      wordArray[i] = current;
      wordArray[j] = next;
    }
  }

  return null;
}

module.exports = { getIndexsForPalindrome };
