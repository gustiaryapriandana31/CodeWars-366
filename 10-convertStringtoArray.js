// Coding Challenge 2024 - Inspired by WPU
// 10/366
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
// 8 kyu

function stringToArray(string){
    if(string === "") {
        return [""];
    } else {    
        return string.split(" ");
    }
}

// function stringToArray(string){
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === " ") {
//             return string.split(" ");
//         }
//     }
// }

// const stringToArray = string => string.split(" ")  
console.log(stringToArray("Robin Syekh"));