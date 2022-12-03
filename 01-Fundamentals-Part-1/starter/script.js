// // BMI Comparison of two person
// // const markWeight = 95;
// // const markHeight = 1.88;
// // const johnWeight = 85;
// // const johnHeight = 1.76;

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const johnBmi = Math.round(johnWeight / johnHeight ** 2);
// const markBmi = Math.round(markWeight / (markHeight * markHeight));
// console.log(markBmi, johnBmi);

// // const markHigherBMI = markBmi > johnBmi;
// // console.log(markHigherBMI);

// if (markBmi > johnBmi) {
//   console.log(`Mark's Bmi (${markBmi}) is higher than John's Bmi (${johnBmi})`);
// } else {
//   console.log(`Mark's Bmi (${markBmi}) is lower than John's Bmi (${johnBmi})`);
// }

// Coding Challenge #3

// function theWinner() {
//   const scoreDolphins = (96 + 108 + 89) / 3;
//   const scoreKoalas = (88 + 91 + 110) / 3;
//   console.log(scoreDolphins, scoreKoalas);

//   if (scoreDolphins > scoreKoalas) {
//     console.log("The winner is Dolphins");
//   } else if (scoreDolphins < scoreKoalas) {
//     console.log("The winner is Koalas");
//   } else if ((scoreDolphins = scoreKoalas)) {
//     console.log("Draw");
//   }
// }
// console.log(theWinner());

// /////////////////////////////////////////////////

// function theWinner100() {
//   const scoreDolphins = (97 + 112 + 101) / 3;
//   const scoreKoalas = (109 + 95 + 123) / 3;

//   // const scoreDolphins = (96 + 108 + 89) / 3;
//   // const scoreKoalas = (88 + 91 + 110) / 3;

//   console.log(scoreDolphins, scoreKoalas);

//   if (scoreKoalas < 100 && scoreDolphins < 100) {
//     console.log("No Winner");
//   } else if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
//     console.log("The winner is Dolphins");
//   } else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
//     console.log("The winner is Koalas");
//   } else if (scoreDolphins === scoreKoalas) {
//     console.log("Draw");
//   }
// }

// console.log(theWinner100());

// function theWinner2() {
//   const scoreDolphins = (97 + 112 + 101) / 3;
//   const scoreKoalas = (109 + 95 + 106) / 3;
//   console.log(scoreDolphins, scoreKoalas);

//   if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
//     console.log("The winner is Dolphins");
//   } else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
//     console.log("The winner is Koalas");
//   } else if (
//     scoreDolphins >= 100 &&
//     scoreKoalas >= 100 &&
//     scoreDolphins == scoreKoalas
//   ) {
//     console.log("Draw");
//   }
// }
// console.log(theWinner2());
///////////////////////////////////////////////////

// const billValue = 40;
// const tip1 = (billValue * 15) / 100;
// const tip2 = (billValue * 20) / 100;

// const total =
//   billValue >= 50 && billValue <= 300
//     ? console.log(
//         `The bill was ${billValue}, the tip was ${tip1}, and the total value ${
//           billValue + tip1
//         }`
//       )
//     : console.log(
//         `The bill was ${billValue}, the tip was ${tip2}, and the total value ${
//           billValue + tip2
//         }`
//       );

// console.log(total);

//////////////////////////////////////////

const bill = 575;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

//////////////////////////////////////////
