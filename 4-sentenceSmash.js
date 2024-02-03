// Coding Challenge 2024 - Inspired by WPU
// 4/366
// https://www.codewars.com/kata/53dc23c68a0c93699800041d
// 8 kyu

function smash(words) {
    let sentence = ""
    for(let i = 0; i < words.length; i++) {
        sentence += words[i];
        if(i != words.length - 1) sentence += ' '; 
    }

    return sentence;
}

// function smash(words) {
//     return words.join(' ');
// };

// const smash = words => words.join(' ');

console.log(smash(["hello", "amazing", "world"]));