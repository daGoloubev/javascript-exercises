var leapYears = function() {
  var c = arguments[0];
  if(c % 4 === 0) {
    if(
      ((c / 400) % 1).toFixed(1) === '1.0' ||
      ((c / 400) % 1) === 0 ||
      ((c / 400) % 1).toFixed(1) === '0.5'
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    if(c % 100 === 0 && c % 400 !== 0){
      return true;
    } else {
      return false;
    }
  }
}

module.exports = leapYears
