export function kelvinFormatter(input) {
  //(kelvin − 273.15) × 9/5 + 32
  let fahrenheit = ((input - 273.15) * 9) / 5 + 32;
  return fahrenheit;
}
