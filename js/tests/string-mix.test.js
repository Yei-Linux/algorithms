const { mix } = require('../strings-mix');

describe('Mix', () => {
  it('Basic tests', function () {
    const result1 = mix('A aaaa bb c', '"& aaa bbb c d"');
    expect(result1).toBe('1:aaaa/2:bbb');

    const result2 = mix('Are they here', 'yes, they are here');
    expect(result2).toBe('2:eeeee/2:yy/=:hh/=:rr');

    const result3 = mix(
      'looping is fun but dangerous',
      'less dangerous than coding'
    );
    expect(result3).toBe('1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg');

    const result4 = mix(' In many languages', " there's a pair of functions");
    expect(result4).toBe('1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt');

    const result5 = mix('Lords of the Fallen', 'gamekult');
    expect(result5).toBe('1:ee/1:ll/1:oo');

    const result6 = mix('codewars', 'codewars');
    expect(result6).toBe('');

    const result7 = mix('A generation must confront the looming ', 'codewarrs');
    expect(result7).toBe('1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr');
  });
});
