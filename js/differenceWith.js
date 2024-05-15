/**
 * https://edabit.com/challenge/jLeqZDXP7W7C7xMk2
 *
 * differenceWith([
 * { make: "mazda", engine: "v8" },   // This is the first array we compare with.
 * { make: "toyota",  engine: "v6" },
 * ],
 * [{ make: "toyota", engine: "v8" }],  // The second array we compare against.
 * (a, b) => a.engine === b.engine    // This is the comparator that compares the two values.
 * ) ➞ [
 * { make: "toyota",  engine: "v6" },  // This is in the first array but none of the others.
 *]
 *
 * @param {*} array
 * @param  {...any} values
 */
function differenceWith(array, ...values) {
  const [arrayToCompare, fn] = values;

  const itemsNotFound = array.filter((item) => {
    const isOnTheArray = arrayToCompare.find((itemCompare) =>
      fn(item, itemCompare)
    );
    return !isOnTheArray;
  });

  return itemsNotFound;
}

module.exports = { differenceWith };
