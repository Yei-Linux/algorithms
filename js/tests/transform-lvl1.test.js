const { transform } = require('../transform-lvl1');
const { assert } = require('./helper');

describe('Transform lvl1 Test', () => {
  it('First case', () => {
    assert.deepEqual(
      transform({
        nombres: ['Bruno', 'Andrea'],
        edades: [20, 19],
      }),
      [
        { id: '1', nombre: 'Bruno', edad: 20 },
        { id: '2', nombre: 'Andrea', edad: 19 },
      ]
    );
  });
});
