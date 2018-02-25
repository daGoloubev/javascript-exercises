var sumAll = function() {
  let ind = Math.min(arguments[0],arguments[1]);
  let len = Math.max(arguments[0],arguments[1]);
  let sum = 0;
  if ( ind > 0 && len > 0 && typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
    for(ind; ind <= len; ind++){
      sum += ind;
    }
  } else {
    sum = "ERROR";
  }
  return sum;
}

module.exports = sumAll
