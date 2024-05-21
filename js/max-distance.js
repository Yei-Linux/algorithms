function maxDistance(movements) {
  let leftCounter = 0;
  let rightCounter = 0;
  let bothCounter = 0;
  movements.split('').forEach((char) => {
    if (char === '<') {
      return leftCounter++;
    }
    if (char === '>') {
      return rightCounter++;
    }
    if (char === '*') {
      return bothCounter++;
    }
  });

  const maxDistanceRes = Math.max(
    leftCounter + bothCounter - rightCounter,
    rightCounter + bothCounter - leftCounter
  );
  return Math.abs(maxDistanceRes);
}

module.exports = { maxDistance };
