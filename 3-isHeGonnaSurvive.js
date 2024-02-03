// Coding Challenge 2024 - Inspired by WPU
// 3/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c
// 8 kyu

// function hero(bullets, dragons){
//     if(bullets >= dragons * 2) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function hero(bullets, dragons) {
//     return bullets >= dragons * 2 ? true : false;
// }

// function hero(bullets, dragons){
//     return bullets / 2 >= dragons;
// } pakai pembagian

const hero = (bullets, dragons) => bullets >= dragons * 2;

console.log(hero(1500, 251));
