require('../nesting-structrure-comparison');
const { assert } = require('./helper');

describe('Tests', () => {
  it('test', () => {
    assert.isTrue(
      [1, 1, 1].sameStructureAs([2, 2, 2]),
      '[1,1,1] same as [2,2,2]'
    );

    assert.isTrue(
      [1, [1, 1]].sameStructureAs([2, [2, 2]]),
      '[1,[1,1]] same as [2,[2,2]]'
    );
    assert.isNotTrue(
      [1, [1, 1]].sameStructureAs([[2, 2], 2]),
      '[1,[1,1]] not same as [[2,2],2]'
    );
    assert.isNotTrue(
      [1, [1, 1]].sameStructureAs([2, [2]]),
      '[1,[1,1]] not same as [2,[2]]'
    );

    assert.isTrue(
      [[[], []]].sameStructureAs([[[], []]]),
      '[[[],[]]] same as [[[],[]]]'
    );
    assert.isNotTrue(
      [[[], []]].sameStructureAs([[1, 1]]),
      '[[[],[]]] not same as [[1,1]]'
    );

    assert.isTrue(
      [1, [[[1]]]].sameStructureAs([2, [[[2]]]]),
      '[1,[[[1]]]] same as [2,[[[2]]]]'
    );

    assert.isNotTrue([].sameStructureAs(1), '[] not same as 1');
    assert.isNotTrue([].sameStructureAs({}), '[] not same as {}');

    assert.isTrue(
      [1, '[', ']'].sameStructureAs(['[', ']', 1]),
      "[1,'[',']'] same as ['[',']',1]"
    );

    assert.isNotTrue(
      [1, 2].sameStructureAs([[3], 3]),
      '[1,2] not same as [[3],3]'
    );
  });
});
