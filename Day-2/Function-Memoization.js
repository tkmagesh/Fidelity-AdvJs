function isPrime(n){
  if (typeof isPrime[n] !== "undefined") {
    console.log("result from cache");
    return isPrime[n];
  }
  var result = true;
  if (n <= 3) {
    result = true;
  } else {
    for(var i=2;i<=(n/2);i++){
      if (n % i === 0) {
        result = false;
        break;
      }
    }
  }
  isPrime[n] = result;
  console.log("result derived from the ground up");
  return result;
}