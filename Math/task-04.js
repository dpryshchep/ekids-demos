var n = +prompt();
var hours = Math.floor(n % (60 * 24) / 60);
var minutes = n % 60;

console.log(hours, minutes);