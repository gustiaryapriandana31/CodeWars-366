// Coding Challenge 2024 - Inspired by WPU
// 8/366
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
// 8 kyu

// var countSheep = function (num){
//     let sheep = ""
//     for(let i = 1; i <= num; i++) {
//         sheep += i + " sheep...";
//         sheep += `${i} sheep...`;
//     }
//     return sheep
// }

// const countSheep = length => Array.from({ length }, (_, i) => ++i + ' sheep...').join('')

// const countSheep = num => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');
const countSheep = num => Array(num).fill().map((_, i) => i + 1 + " sheep...").join('');

console.log(countSheep(10)); // "1 sheep...2 sheep..."