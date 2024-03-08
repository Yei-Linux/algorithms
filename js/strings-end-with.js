function stringsEndWith(a, b) {
  const size = b.length;
  return a.slice(-size) === b;
}

module.exports = { stringsEndWith };
