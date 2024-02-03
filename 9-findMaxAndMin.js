// Coding Challenge 2024 - Inspired by WPU
// 9/366
// https://www.codewars.com/kata/577a98a6ae28071780000989
// 8 kyu

// Versi Barbar
// var min = function (list) {
//     let minValue = list[0];
//     for(let i = 1; i < list.length; i++) {
//         if(list[i] < minValue) {
//             minValue = list[i];
//         }
//     }

//     return minValue;
// };

// var max = function (list) {
//     let maxValue = list[0];
//     for(let i = 1; i < list.length; i++) {
//         if(list[i] > maxValue) {
//             maxValue = list[i];
//         }
//     }

//     return maxValue;
// };


// Versi Singkat - Sedang
const min = list => list.sort((a, b) => a - b)[0];
const max = list => list.sort((a, b) => a - b)[list.length - 1];
// const max = list => list.sort((a, b) => b - a)[0];

// Versi dengan library
// const min = list => Math.min(...list);
// const max = list => Math.max(...list);

console.log(max([4, 6, 2, 1, 9, 63, -134, 566, 567])); // 566
console.log(min([42, -54, 6, 0, 1, 11, 111])); // -110
