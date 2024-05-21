/**
 * https://adventjs.dev/es/challenges/2023/9
 *
 * [1,0,1,1,1]
 *
 * [1,0,1,0,1]
 * [0,1,0,1,0]
 *
 * [0,0,1,0,1]
 *
 * [1,0,1,0,1]
 * [0,1,0,1,0]
 *
 * [0,0,1,1,1]
 *
 * [1,0,1,0,1]
 * [0,1,0,1,0]
 *
 * @param {*} lights
 * @returns
 */
function adjustLights(lights) {
  const size = lights.length;
  const firstVariant = Array(size)
    .fill('')
    .map((_, i) => (i % 2 === 0 ? '1' : '0'));
  const secondVariant = Array(size)
    .fill('')
    .map((_, i) => (i % 2 === 0 ? '0' : '1'));

  const newLights = lights.map((light) => (light === '🟢' ? '1' : '0'));

  let firstVariantDiff = 0;
  let secondVariantDiff = 0;

  for (let i = 0; i < newLights.length; i++) {
    if (firstVariant[i] !== newLights[i]) {
      firstVariantDiff++;
    }

    if (secondVariant[i] !== newLights[i]) {
      secondVariantDiff++;
    }
  }

  return Math.min(firstVariantDiff, secondVariantDiff);
}

module.exports = { adjustLights };
