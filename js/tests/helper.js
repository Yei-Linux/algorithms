const assert = {
  strictEqual: (a, b) => expect(a).toBe(b),
  isTrue: (a, b) => expect(a).toBeTruthy(),
};

module.exports = { assert };
