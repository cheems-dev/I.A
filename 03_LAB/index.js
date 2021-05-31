const x = [1, 2, 2, 3, 3, 4, 5, 6, 6, 6, 8, 10];
const y = [
  -890, -1411, -1560, -2220, -2091, -2878, -3537, -3268, -3920, -4163, -5471,
  -5157,
];

const result1 = [];
const result2 = [];
const result3 = [];
const result4 = [];

function functionCost(w0 = 1.0, w1 = 1.0, y = 1.0) {
  return +(w0 + w1 * y).toFixed(2);
}

y.forEach((el) => {
  result1.push(functionCost(-1780.0, -530.9, el));
  result2.push(functionCost(-569.6, -530.9, el));
  result3.push(functionCost(-1780.0, 530.9, el));
  result4.push(functionCost(-569.6, 530.9, el));
});

// console.log("Result 1,,Result 2,Result 3,Result 4");
// for (let i = 0; i < y.length; i++) {
//   console.log(`${result1[i]},${result2[i]},${result3[i]},${result4[i]}`);
// }
console.log(y.length);
console.log(result1.length);
