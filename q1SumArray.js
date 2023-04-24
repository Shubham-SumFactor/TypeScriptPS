"use strict";
exports.__esModule = true;
var myArray = [1, 2, 3, 4, 5];
function sumArray(arr) {
    // sumArray that takes an array of numbers as input n returns op as number
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(sumArray(myArray));
