// Temperature Converter Project

// function to convert from celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// function to convert from fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// function to return output by using the above two functions as input
function formatTemperature(value, unit) {
    console.log(`${value} ${unit}`);
}

const fh = celsiusToFahrenheit(25);
console.log(formatTemperature(fh, 'F'));

const cl = fahrenheitToCelsius(68);
console.log(formatTemperature(cl, 'C'));

const freezingFahrenheit = celsiusToFahrenheit(0);
console.log(formatTemperature(freezingFahrenheit, 'F'));

const freezingCelsius = fahrenheitToCelsius(32);
console.log(formatTemperature(freezingCelsius, 'C'));