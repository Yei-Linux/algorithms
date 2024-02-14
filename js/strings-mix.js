const lowerVocabulary = 'abcdefghijklmnopqrstuvwxyz';
const isIncludeInMyLowerVocabulary = (letter) =>
  lowerVocabulary.includes(letter);

const getRepeatedLetterByNumber = (letter, size) =>
  letter.padStart(size, letter);

/**
 * Sorting by this format: 2:eeeee/2:yy/=:hh/=:rr
 * @param {*} store
 */
const sortStore = (str) => {
  const items = str.split('/');
  const sorted = items.sort((a, b) => {
    const [leftA, rightA] = a.split(':');
    const [leftB, rightB] = b.split(':');

    if (rightB.length === rightA.length) {
      if (leftA < leftB) {
        return -1;
      }
      if (leftA > leftB) {
        return 1;
      }
      return rightA.localeCompare(rightB);
    }

    return rightB.length - rightA.length;
  });

  return sorted.join('/');
};

const groupByLowerLetter = (sGroup, sGroupName, store) => {
  sGroup.split('').forEach((letter) => {
    const isInclude = isIncludeInMyLowerVocabulary(letter);
    if (!isInclude) return;

    store[letter] = {
      ...store[letter],
      [sGroupName]: store[letter] ? (store[letter][sGroupName] ?? 0) + 1 : 1,
    };
  });
};
/**
 * https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript
 * @param {
 * } pyramid
 *
 * Proposal Solution:
 *  s1 = "A aaaa bb c"
 * s2 = "& aaa bbb c d"
 *
 */
function mix(s1, s2) {
  let store = {};

  groupByLowerLetter(s1, 's1', store);
  groupByLowerLetter(s2, 's2', store);

  const stringMix = Object.entries(store)
    .map(([letter, group]) => {
      const s1 = isNaN(group.s1) ? 0 : group.s1;
      const s2 = isNaN(group.s2) ? 0 : group.s2;

      if (s1 <= 1 && s2 <= 1) {
        return;
      }

      if (s1 === s2 && s1 > 1 && s2 > 1) {
        const s1Repeated = getRepeatedLetterByNumber(letter, s1);
        return '=:' + s1Repeated;
      }

      const finalSGroup = Math.max(s1, s2);
      if (finalSGroup <= 1) return;

      const finalSGroupRepeated = getRepeatedLetterByNumber(
        letter,
        finalSGroup
      );
      const preffix = s1 > s2 ? '1' : '2';
      return `${preffix}:${finalSGroupRepeated}`;
    })
    .filter((item) => item !== undefined)
    .join('/');

  const stringMixSorted = sortStore(stringMix);
  return stringMixSorted;
}

module.exports = { mix };
