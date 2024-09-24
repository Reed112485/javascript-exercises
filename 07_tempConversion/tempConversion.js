const convertToCelsius = function(fTemp) {
  let conversion = ((fTemp - 32) * (5/9));

  let fixed = parseFloat(conversion.toFixed(1));

  return fixed;
};

const convertToFahrenheit = function(cTemp) {
  let conversion = (cTemp * 9/5 + 32);

  let fixed = parseFloat(conversion.toFixed(1));

  return fixed;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};