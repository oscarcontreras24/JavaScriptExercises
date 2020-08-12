const ftoc = function(num) {
  let temp = (num - 32) * (5/9);
  return Math.round(10 * temp) / 10;
}

const ctof = function(num) {
  let temp = num * (9/5) + 32;
  return Math.round(10 * temp) / 10;
}

module.exports = {
  ftoc,
  ctof
}
