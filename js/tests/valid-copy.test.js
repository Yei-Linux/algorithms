const { checkIsValidCopy } = require('../valid-copy');
const { assert } = require('./helper');

describe('Valid Copy', () => {
  it('First case', () => {
    assert.isTrue(
      checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#')
    );
    assert.isNotTrue(
      checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#')
    );
    assert.isTrue(checkIsValidCopy('Santa Claus', 's#+:. c:. s'));
    assert.isNotTrue(checkIsValidCopy('Santa Claus', 's#+:.#c:. s'));
    assert.isNotTrue(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s'));
    assert.isTrue(checkIsValidCopy('3 #egalos', '3 .+:# #:'));
  });
});
