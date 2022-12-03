"use strict"; //use this at the beginning of every project

// const calcAverage = (score1, score2, score3) => {
//   const scoreAvg = (score1 + score2 + score3) / 3;
//   return scoreAvg;
// };

// // or const calcAverage = (score1,score2,score3) => (score1 + score2 + score3) / 3;
// // ant ology calcAverage = (a,b,c) => (a+b+c)/3;

// const checkWinner = function () {
//   const avgDolphins = calcAverage(85, 54, 41);
//   const avgKoalas = calcAverage(23, 34, 27);

//   if (avgDolphins > avgKoalas * 2) {
//     console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
//   } else if (avgKoalas > avgDolphins * 2) {
//     console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
//   } else {
//     console.log(`Nobody win ${avgKoalas} vs. ${avgDolphins}`);
//   }
// };

// console.log(checkWinner());
/////////////////////////////////////////////

// const calcTip = function (price) {
//   const calcTipsForm = price <= 300 && price >= 50 ? price * 0.15 : price * 0.2;
//   return calcTipsForm;
// };

// const bills = [125, 555, 44];
// console.log(bills);

// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[bills.length - 1]),
// ];
// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(totals);
///////////////////////////////////////
//BMI Challenge

// const mark = {
//   firstName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = Number(this.mass / Math.pow(this.height, 2)).toFixed(2);
//     return this.bmi;
//   },
// };

// const john = {
//   firstName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = Number(this.mass / Math.pow(this.height, 2)).toFixed(2);
//     return this.bmi;
//   },
// };
// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// console.log(
//   mark.bmi > john.bmi
//     ? `${mark.firstName}'s BMI ${mark["calcBMI"]()} is higher than ${
//         john.firstName
//       }'s BMI ${john["calcBMI"]()}`
//     : `${john.firstName}'s BMI ${john["calcBMI"]()} is higher than ${
//         mark.firstName
//       }'s BMI ${mark["calcBMI"]()}`
// );

///////////////////////////////////////////////////////

const calcTip = function (price) {
  const calcTipsForm = price <= 300 && price >= 50 ? price * 0.15 : price * 0.2;
  return calcTipsForm;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(bills);

const tips = [];
console.log(tips);
const totals = [];
console.log(totals);

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  // or const tip = calcTip(bills[i]); and then tips.push(tip);
  totals[i] = tips[i] + bills[i];
  // or totals.push(tips[i] + bills[i];);
}
console.log(bills, tips, totals);
console.log(`Here is all the ${tips}`);
console.log(`These are all the total ${totals}`);

/////// to make to Average SUM of an array

const calcAverage = function (arr) {
  let sum = 0; /* to keep all the calculation when looping*/
  for (let i = 0; i < arr.length; i++)
    // Formula to addition number in array
    // sum = sum + arr[i];
    sum += arr[i];
  /* if just return sum; it's only just return the additional value of array */
  return sum / arr.length;
};

console.log(calcAverage(totals));
console.log();
