// Coding Challenge 2024 - Inspired by WPU
// 1/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078
// 8 kyu


// function grow(x) {
//   let result = x[0];
//   for (let i = 1; i < x.length; i++) {
//     result *= x[i];
//   }
//   return result;
// }

// function grow(x) {
//     return x.reduce((acc, cur) => acc * cur)
// }

const grow = (x) => x.reduce((acc, cur) => acc * cur);

console.log(grow([1, 2, 3, 3]));
