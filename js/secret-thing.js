/**
 * https://www.codewars.com/kata/53f40dff5f9d31b813000774/train/javascript
 * 
 * Input: [
    ['t','u','p'],
    ['w','h','i'],
    ['t','s','u'],
    ['a','t','s'],
    ['h','a','p'],
    ['t','i','s'],
    ['w','h','s']
    ]
 * 
 * Output: whatisup
 * 
 * 1. Iterate the triplets get the first index and remove it, after that let store it in a secretArray.
 * 2. Then in a while loop we have to verify if the triplet item have any letter in our secretArray.
 *  2.1 If not includes the letter so proceed to continue iterating
 *  2.2 If includes the letter so proceed to:
 *      2.2.1 Create a function to locate in a correct order the triplet
 *      2.2.2 After that proceed to remove it with splce(index,1)
 * 3. Finally return the secretArray.join("")
 * @param {*} triplets
 */
const recoverSecret = function (triplets) {
  let secretArray = triplets.shift();

  while (triplets.length > 0) {
    const triplet = triplets.shift();
    const isIncluded = includesLetterInSecretArray(secretArray, triplet);
    if (!isIncluded) {
      triplets.push(triplet);
      continue;
    }
    secretArray = locateCorrectOrderToSecretArray(secretArray, triplet);
  }

  return secretArray.join('');
};

function includesLetterInSecretArray(secretArray, triplet) {
  return secretArray.some((secretItem) => triplet.includes(secretItem));
}

function locateCorrectOrderToSecretArray(secretArray, triplet) {
  let newSecretArray = [...secretArray];

  for (let i = 0; i < secretArray.length; i++) {
    const item = secretArray[i];
    const index = triplet.findIndex((tripletItem) => tripletItem === item);
    if (index === -1) {
      continue;
    }

    const prev = triplet[index - 1];
    const next = triplet[index + 1];
    const contact = [
      newSecretArray.includes(prev) ? undefined : prev,
      item,
      newSecretArray.includes(next) ? undefined : next,
    ].filter((item) => item != undefined);
    const newIndex = newSecretArray.findIndex((newItem) => newItem === item);

    newSecretArray[newIndex] = contact;

    newSecretArray = newSecretArray.flat();
    newSecretArray = [...new Set(newSecretArray)];
  }

  return newSecretArray;
}

module.exports = { recoverSecret };
