function findMinDist(n, m, x, y) {
  var longSide = (n >= m) ? n : m;
  var shortSide = (n <= m) ? n : m;

  var longDist = shortSide - x;
  var shortDist = longSide - y;

  var longMin = (shortDist > (longSide /2))
    ? longSide - shortDist
    : shortDist;

  var shortMin = (longDist > (shortSide / 2))
    ? shortSide - longDist
    : longDist;

  return longMin >= shortMin ? shortMin : longMin;
}

function assert(cond, message) {
  if (cond) {
    console.log("Case => " + message + ": %cpassed", 'color: #0f0');
  } else {
    console.log("Case => " + 	message + ": %cfailed", 'color: red');
  }
}

assert (findMinDist(23, 52, 8, 43) === 8,
  "1: should return min dist");
assert (findMinDist(18, 90, 3, 63) === 3,
  "2: should return min dist");
assert (findMinDist(96, 1, 0, 83) === 1,
  "3: should return min dist");
assert (findMinDist(78, 29, 1, 10) === 1,
  "4: should return min dist");
assert (findMinDist(49, 31, 14, 32) === 14,
  "5: should return min dist");
assert (findMinDist(53, 3, 2, 0) === 0,
  "6: should return min dist");
assert (findMinDist(65, 30, 12, 12) === 12,
  "7: should return min dist");
assert (findMinDist(98, 77, 31, 80) === 18,
  "8: should return min dist");
assert (findMinDist(46, 90, 28, 77) === 13,
  "9: should return min dist");
