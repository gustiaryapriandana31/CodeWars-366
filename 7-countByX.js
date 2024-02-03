// Coding Challenge 2024 - Inspired by WPU
// 7/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e
// 8 kyu

// function countBy(x, n) {
//     let z = [];
//     for(let i = 1; i <= n; i++) {
//         z.push(x * i);
//     }
//     return z;
// }

// Pakai Spread Operator
// const countBy = (x, n) => [...Array(n)].map((el, i) => x * (i + 1));

const countBy = (x, n) => Array(n).fill().map((_, i) => x * (i + 1)); // kita bisa mengganti keyword el dengan _ karena kita tidak terlalu perlu    

console.log(countBy(4,4)); // [1, 2, 3, 4, 5]