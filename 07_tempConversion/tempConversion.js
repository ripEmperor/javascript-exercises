const ftoc = function(fah) {
  let result = (fah - 32) * .5556;
  return Math.round(result * 10) / 10;
};

const ctof = function(cel) {
  let result = ((cel + 32) * 9)/5;
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
