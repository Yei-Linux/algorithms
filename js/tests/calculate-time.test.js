const { calculateTime } = require('../calculate-time');
const { assert } = require('./helper');

describe('Christmas Tree', () => {
  it('First case', () => {
    assert.assertEquals(
      calculateTime(['00:10:00', '01:00:00', '03:30:00']),
      '-02:20:00'
    );
    assert.assertEquals(
      calculateTime(['02:00:00', '05:00:00', '00:30:00']),
      '00:30:00'
    );
    assert.assertEquals(
      calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']),
      '-05:29:00'
    );
  });
});
