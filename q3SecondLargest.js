// Write a function that takes an array of numbers as input and returns the second largest number in the array.
function secondLargest(array) {
    if (array.length < 2) {
        console.log("only one element Available");
        return; // undefined as output in fn o/p
    }
    var max = array[0]; // temp for comparison is required// maximum element in d array
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    // to find second largest
    var secondMax = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > secondMax && array[i] < max) {
            secondMax = array[i];
        }
    }
    return secondMax;
}
var array = [1, 2, 3, 4, 5, 6, 7];
console.log(secondLargest(array));
// Alternative Method with one loop
function secondLarge(arr) {
    var secondLargest = -1;
    var largest = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > arr[largest]) {
            secondLargest = largest;
            largest = i;
        }
        else if (arr[i] != arr[largest]) {
            if (secondLargest == -1 || arr[i] > arr[secondLargest]) {
                secondLargest = i;
            }
        }
    }
    return arr[secondLargest];
}
console.log(secondLarge([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
