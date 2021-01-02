// 345 => 3 + 4 + 5 = 12
// 21 => 3

function sumDigit(value) {
  var sum = 0;
  // 345 => "345"
  var strValue = Math.abs(value).toString();

  // "345" => "3","4","5"
  for (var i = 0; i < strValue.length; i++) {
    // +"3" => 3
    sum += +strValue[i];
  }

  return sum;
}

function assert(cond, message) {
  if (cond) {
    console.log("Case => " + message + ": %cpassed", 'color: #0f0');
  } else {
    console.log("Case => " + message + ": %cfailed", 'color: red');
  }
}

assert(sumDigit(45) === 9, "positive 2-d value");
assert(sumDigit(200) === 2, "positive 3-d value");
assert(sumDigit(0) === 0, "0 value");
assert(sumDigit(-56) === 11, "negative value");
assert(sumDigit("56") === 11, "string value");
