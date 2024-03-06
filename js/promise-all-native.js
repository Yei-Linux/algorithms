/**
 * Resolve if all promises are resolved and reject if anyone of those were rejected
 * promiseAll([new Promise(), new Promise(), new Promise(),....])
 *
 */

const promiseAll = async (promises) => {
  const output = [];
  let settleDown = 0;

  return new Promise((res, rej) => {
    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];
      promise
        .then((res2) => {
          output[i] = res2;
          settleDown++;

          if (settleDown === promises.length) {
            res(output);
          }
        })
        .catch(() => {
          rej(promise);
        });
    }
  });
};

module.exports = {
  promiseAll,
};
