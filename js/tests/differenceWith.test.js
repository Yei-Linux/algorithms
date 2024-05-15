const { differenceWith } = require('../differenceWith');
const { assert } = require('./helper');

describe('Difference With', () => {
  it('First case', () => {
    assert.deepEqual(
      differenceWith(
        [
          { make: 'mazda', engine: 'v8' },
          { make: 'toyota', engine: 'v6' },
        ],
        [{ make: 'toyota', engine: 'v8' }],
        (a, b) => a.engine === b.engine
      ),
      [{ make: 'toyota', engine: 'v6' }]
    );
  });
});
