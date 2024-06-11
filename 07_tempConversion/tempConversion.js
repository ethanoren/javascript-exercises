const convertToCelsius = function convertToCelsius(temp) {
  const divisor = 5/9;
  var newTemp = temp - 32;
  newTemp = newTemp * divisor;
  return Math.round(newTemp * 10) / 10
};

const convertToFahrenheit = function convertToFahrenheit(temp) {
  var newTemp = temp*1.8;
  newTemp = newTemp + 32;
  return Math.round(newTemp * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
