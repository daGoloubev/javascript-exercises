function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}
var ftoc = function(f) {
  return precisionRound((f - 32) * (5 / 9), 1);
}

var ctof = function(c) {
  return precisionRound((c / (5 / 9)) + 32, 1);
}

module.exports = {
  ftoc,
  ctof
}
