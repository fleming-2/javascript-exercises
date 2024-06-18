const convertToCelsius = function(degrees) {
  // Convert
  degrees = (degrees - 32) * 5 / 9;

  // Round to one decimal place
  degrees = Math.round(degrees * 10) / 10;

  return degrees;
};

const convertToFahrenheit = function(degrees) {
  // Convert
  degrees = (degrees * 9 / 5) + 32;

  // Round to one decimal place
  degrees = Math.round(degrees * 10) / 10;

  return degrees;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
