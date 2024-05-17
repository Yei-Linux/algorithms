const { valueInTree } = require('../value-in-tree');
const { assert } = require('./helper');

const lst1 = [
  3,
  [7, [1, null, null], [8, null, null]],
  [5, null, [4, null, null]],
];
const lst2_8 = [2, null, null];
const lst2_6 = [24, null, null];
const lst2_7 = [18, null, null];
const lst2_4 = [4, lst2_8, null];
const lst2_3 = [12, null, lst2_4];
const lst2_2 = [10, null, lst2_3];
const lst2_1 = [15, lst2_2, null];
const lst2_5 = [6, lst2_6, lst2_7];
const lst2 = [9, lst2_1, lst2_5];
const lst3_1 = [4, null, null];
const lst3_2 = [9, null, null];
const lst3_3 = [21, null, null];
const lst3_4 = [17, null, null];
const lst3_5 = [25, null, null];
const lst3_6 = [18, lst3_5, null];
const lst3_7 = [20, lst3_3, lst3_4];
const lst3_8 = [91, lst3_2, null];
const lst3_9 = [75, null, lst3_1];
const lst3_10 = [45, null, null];
const lst3_11 = [71, null, null];
const lst3_12 = [34, null, null];
const lst3_13 = [11, null, null];
const lst3_14 = [10, lst3_6, lst3_13];
const lst3_15 = [3, lst3_7, lst3_12];
const lst3_16 = [26, lst3_8, lst3_11];
const lst3_17 = [1, lst3_9, lst3_10];
const lst3_18 = [66, lst3_14, lst3_17];
const lst3_19 = [52, lst3_16, lst3_15];
const lst3 = [97, lst3_18, lst3_19];

describe('Value In Tree Test', () => {
  it('First case', () => {
    assert.assertEquals(valueInTree(lst1, 7), true);
    assert.assertEquals(valueInTree(lst1, 4), true);
    assert.assertEquals(valueInTree(lst1, 15), false);
    assert.assertEquals(valueInTree(lst2, 18), true);
    assert.assertEquals(valueInTree(lst2, 51), false);
    assert.assertEquals(valueInTree(lst2, 23), false);
    assert.assertEquals(valueInTree(lst3, 52), true);
    assert.assertEquals(valueInTree(lst3, 120), false);
    assert.assertEquals(valueInTree(lst3, -2), false);
    assert.assertEquals(valueInTree(lst3, 91), true);
  });
});
