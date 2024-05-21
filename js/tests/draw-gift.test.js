const { drawGift } = require('../draw-gift');
const { assert } = require('./helper');

describe('Draw Gift', () => {
  it('First case', () => {
    assert.assertEquals(
      drawGift(4, '+'),
      `   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
`
    );
  });
});
