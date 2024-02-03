// Coding Challenge 2024 - Inspired by WPU
// 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
// 8 kyu

// const reverseSeq = n => {
//     const result = []
//     for(let i = n; i >= 1; i--) {
//         result.push(i);
//     }
//     return result;
// };

// const reverseSeq = n => {
//     // return [...Array(n)] // sama dengan cara yang bawah
//     return Array(n).fill().map((el, n) => n + 1).reverse();
// }

// const reverseSeq = n => [...Array(n)].map((el, i) => i + 1).reverse(); // cara spread operator+map+reverse

// const reverseSeq = n => Array(n).fill().map((el, i) => i + 1).reverse(); // cara Array.fill+map+reverse

const reverseSeq = n => Array(n).fill().map((el, i) => n - i); // tidak pakai reverse 

console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]