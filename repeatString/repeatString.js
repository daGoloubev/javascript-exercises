var repeatString = function(string, times) {
  let r = "";
  while(times > 0){
     r += string;
     times = times - 1;
  }
  return times < 0 ? 'ERROR': r;
}

module.exports = repeatString
