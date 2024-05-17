/**
 * https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
 * @param {*} dice
 */
function score(dice) {
  const rules = [
    ,
    [
      { diceSize: 1, points: 100 },
      { diceSize: 3, points: 1000 },
    ],
    [{ diceSize: 3, points: 200 }],
    [{ diceSize: 3, points: 300 }],
    [{ diceSize: 3, points: 400 }],
    [
      { diceSize: 3, points: 500 },
      { diceSize: 1, points: 50 },
    ],
    [{ diceSize: 3, points: 600 }],
  ];

  return [...new Set(dice)].reduce((acc, item) => {
    const size = dice.filter((item2) => item === item2).length;
    const rule = rules[item];
    if (!rule) return acc;

    const coc = Math.max(+Math.floor(size / 3), 1);
    const remain = Math.max(size % 3, 1);

    const pointsRule3 = rule.find((r) => r.diceSize === 3);
    const pointsRule1 = rule.find((r) => r.diceSize === 1);
    return (
      acc +
      (pointsRule3 && size / 3 >= 1 ? pointsRule3.points * coc : 0) +
      (pointsRule1 && size % 3 > 0 ? pointsRule1.points * remain : 0)
    );
  }, 0);
}

module.exports = { score };
