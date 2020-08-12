const sumAll = function(...args) {
  let runningTotal = 0;
  let minArg = 0;
  let maxArg = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] < 0 || typeof(args[i]) != 'number') {
      return "ERROR";
    }
    if (args[i] > maxArg) {
      minArg = maxArg;
      maxArg = args[i];
    }
  }
  for (let i = minArg; i <= maxArg; i++) {
    console.log(i);
    runningTotal += i;
  }
  return runningTotal;
}

module.exports = sumAll
