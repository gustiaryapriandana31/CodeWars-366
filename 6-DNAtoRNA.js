// Coding Challenge 2024 - Inspired by WPU
// 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089
// 8 kyu

// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//     let rna = "";
//     for(let i = 0; i < dna.length; i++) {
//         // if(dna[i] === "T") {
//         //     rna += "U";
//         // } else {
//         //     rna += dna[i];
//         // }

//         // Ternary Operator
//         rna += dna[i] === "T" ? "U" : dna[i];
//     }
//     return rna;
// }

// const DNAtoRNA = (dna) => dna.split('').map((el) => el === "T" ? "U" : el).join('');

// const DNAtoRNA = dna => dna.split("T").join("U");

// pakai Regex
const DNAtoRNA = (dna) => dna.replaceAll("T", "U");
// const DNAtoRNA = (dna) => dna.replace(/T/g, "U");

console.log(DNAtoRNA("TGCGTACGTA"));
