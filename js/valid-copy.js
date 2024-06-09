/**
 * Plan:
 * 1. Iterate the array of chars
 * 2. create a function to verify each letter
 * 3. If this checker function return false all the process will stop and return false
 *
 * A-Z
 * a-z
 * #
 * +
 * _
 * :
 * .
 *
 *
 * 'Santa Claus'
 * 'santa cla#s'
 * 'sa#t# cl#+s'
 * 'sa+## c#+:s'
 * 's#++. c+:.s'
 * 's#+:. c:. s'
 *
 * https://adventjs.dev/es/challenges/2023/12
 * @param {*} original
 * @param {*} copy
 * @returns
 */
function checkIsValidCopy(original, copy) {
  const specials = ['#', '+', '-', '.', ':', ' '];
  const array = original.split('');
  const copiedArray = copy.split('');
  const checker = (char, copyChar) => {
    if (char === ' ') return char === copyChar;
    if (char === copyChar) return true;

    const allowedCopy = [...specials];
    if (allowedCopy.includes(copyChar)) {
      if (!allowedCopy.includes(char)) return true;

      const index = allowedCopy.findIndex((item) => item === char);
      const copyIndex = allowedCopy.findIndex((item) => item === copyChar);
      return index < copyIndex;
    }

    return copyChar === char.toLowerCase();
  };

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const copyElement = copiedArray[i];
    const isValid = checker(element, copyElement);
    if (!isValid) return false;
  }

  return true;
}

module.exports = { checkIsValidCopy };
