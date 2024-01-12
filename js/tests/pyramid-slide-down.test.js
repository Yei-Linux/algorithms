const { longestSlideDown } = require('../pyramid-slide-down');

describe('Pyramid Slow down', () => {
  it('Small pyramids', () => {
    const sum = longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]);

    expect(sum).toBe(23);
  });
});
