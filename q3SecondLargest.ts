// Write a function that takes an array of numbers as input and returns the second largest number in the array.


function secondLargest(array: number[]): number | undefined{
 if (array.length < 2){
    console.log("only one element Available");
    return; // undefined as output in fn o/p
    }

   let max = array[0]; // temp for comparison is required// maximum element in d array
   for(let i = 1; i<array.length; i++){
    if(array[i]>max){
        max = array[i];
    }
   }
// to find second largest

let secondMax = array[0];
for (let i = 1; i< array.length; i++){
    if (array[i] > secondMax && array[i] < max){
        secondMax = array[i];
    }
}
return secondMax;


}

const array = [1,2,3,4,5,6,7];
console.log(secondLargest(array))