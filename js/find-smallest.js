/**
 *
 * [2,3,4,1,3] => [1,2,3,4,3]
 * [3,2,4,1,3]
 * [3,4,2,1,3]
 * [3,4,1,2,3]
 * [3,4,1,3,2]
 * smallest(261235) --> [126235, 2, 0]
 * smallest(209917) --> [29917, 0, 1]
 * @param {*} n
 */
function smallest(n) {
  let nArray = n.toString().split('');
  let counter = 0;

  let indexTook = 0;
  let indexPut = 0;
  let baseNumber = n;

  for (let i = 0; i < nArray.length; i++) {
    const number = nArray[i];
    const restNumbers = nArray.filter((item, index) => index !== i);

    while (counter < nArray.length) {
      const iterator = [...restNumbers];
      iterator.splice(counter, 0, number);
      const newNumber = +iterator.join('');

      if (newNumber < baseNumber) {
        baseNumber = newNumber;
        indexTook = i;
        indexPut = counter;
      }

      counter++;
    }
    counter = 0;
  }
  return [baseNumber, indexTook, indexPut];
}

module.exports = { smallest };
