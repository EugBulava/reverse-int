module.exports = function reverse (n) {
    n = Math.abs(n);
  var result = String(n).split("").reverse().join("");
  console.log(result);
  return Number(result);  
}

//console.log(reverse(-192));