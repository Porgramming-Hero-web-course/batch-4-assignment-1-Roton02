"use strict";
const sumArray = (sum) => {
    return sum.reduce((acc, value) => acc + value, 0);
};
const sum = sumArray([1, 2, 3, 4, 5]);
// // Sample Input:
// sumArray([1, 2, 3, 4, 5]);
// // Sample Output:
// 15;
