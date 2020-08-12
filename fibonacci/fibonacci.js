const fibonacci = function(n) {
  if (n < 0) {
    return "OOPS";
  }
  if (typeof n == "string") {
    n = parseInt(n);
  }
  if (n <= 1) {
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}

module.exports = fibonacci
