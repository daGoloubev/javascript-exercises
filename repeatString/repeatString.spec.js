var repeatString = require('./repeatString')

describe('repeatString', function() {
  fit('repeats the string', function() {
    expect(repeatString('hey', 3)).toEqual('heyheyhey');
  });
  fit('repeats the string many times', function() {
    expect(repeatString('hey', 10)).toEqual('heyheyheyheyheyheyheyheyheyhey');
  });
  fit('repeats the string 1 times', function() {
    expect(repeatString('hey', 1)).toEqual('hey');
  });
  fit('repeats the string 0 times', function() {
    expect(repeatString('hey', 0)).toEqual('');
  });
  fit('returns ERROR with negative numbers', function() {
    expect(repeatString('hey', -1)).toEqual('ERROR');
  });
});
