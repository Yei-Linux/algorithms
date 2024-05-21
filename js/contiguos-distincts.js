/**
 * https://www.codewars.com/kata/5945f0c207693bc53100006b/train/javascript
 * @param {*} k
 * @param {*} arr
 * @returns
 */
function countContiguousDistinct(k, arr) {
  const counts = new Map();
  const inc = (i) => counts.set(i, counts.has(i) ? counts.get(i) + 1 : 1);
  const dec = (i) =>
    counts.get(i) === 1 ? counts.delete(i) : counts.set(i, counts.get(i) - 1);
  for (let i = 0; i < k; ++i) {
    inc(arr[i]);
  }
  const result = [counts.size];
  for (let i = k; i < arr.length; ++i) {
    inc(arr[i]);
    dec(arr[i - k]);
    result.push(counts.size);
  }
  return result;
}
module.exports = { countContiguousDistinct };
