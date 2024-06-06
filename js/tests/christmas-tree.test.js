const { createChristmasTree } = require('../christmas-tree');
const { assert } = require('./helper');

describe('Christmas Tree', () => {
  it('First case', () => {
    assert.assertEquals(
      createChristmasTree('123', 4),
      `   1
  2 3
 1 2 3
1 2 3 1
   |
`
    );
    assert.assertEquals(
      createChristmasTree('*@o', 3),
      `  *
 @ o
* @ o
  |
`
    );
  });
});
