var removeFromArray = function() {
  var arr = arguments[0];
  for(var i = 1; i < arguments.length; i++){
    var ix = arr.indexOf(arguments[i]);
    if(ix > -1){
      arr.splice(ix,1);
    }
  }
  return arr;
}

module.exports = removeFromArray
