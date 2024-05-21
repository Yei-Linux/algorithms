const { decode } = require('../brackets-reverse');
const { assert } = require('./helper');

describe('Brackets Reverse', () => {
  it('First case', () => {
    assert.assertEquals(decode('hola (odnum)'), 'hola mundo');
    assert.assertEquals(decode('(olleh) (dlrow)!'), 'hello world!');
    assert.assertEquals(decode('sa(u(cla)atn)s'), 'santaclaus');
    assert.assertEquals(decode('((((nta)(sa))))'), 'santa');
    assert.assertEquals(decode('hola'), 'hola');
  });
});
