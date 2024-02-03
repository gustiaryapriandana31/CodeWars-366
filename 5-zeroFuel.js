// Coding Challenge 2024 - Inspired by WPU
// 5/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e
// 8 kyu

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump <= mpg * fuelLeft;
// };

const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg <= fuelLeft;

console.log(zeroFuel(50, 25, 2)); 