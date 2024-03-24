const { convertQueryToMap } = require('../objetify-url-querystring');
const { assert } = require('./helper');

describe('Objectify URL QueryString', () => {
  it('First case', () => {
    const q =
        'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue',
      out = {
        user: {
          name: {
            firstname: 'Bob',
            lastname: 'Smith',
          },
          favoritecolor: 'Light Blue',
        },
      };
    assert.deepEqual(convertQueryToMap(q), out);
  });
});
