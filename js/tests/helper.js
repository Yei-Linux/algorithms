const assert = {
  deepEqual: (a, b) => expect(JSON.stringify(a)).toBe(JSON.stringify(b)),
  strictEqual: (a, b) => expect(a).toBe(b),
  assertEquals: (a, b) => expect(a).toBe(b),
  isTrue: (a, b) => expect(a).toBeTruthy(),
  isNotTrue: (a, b) => expect(a).toBeFalsy(),
};

module.exports = { assert };
