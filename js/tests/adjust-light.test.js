const { adjustLights } = require('../adjust-lights');
const { assert } = require('./helper');

describe('Adjust lighs', () => {
  it('First case', () => {
    assert.assertEquals(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']), 1);
  });
});
