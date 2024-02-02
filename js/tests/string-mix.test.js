const { mix } = require('../strings-mix');

describe('Mix', () => {
  it('Basic tests', function () {
    const result1 = mix('A aaaa bb c', '"& aaa bbb c d"');
    expect(result1).toBe('1:aaaa/2:bbb');

    const result2 = mix('Are they here', 'yes, they are here');
    expect(result2).toBe('2:eeeee/2:yy/=:hh/=:rr');
  });
});
