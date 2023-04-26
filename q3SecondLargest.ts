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


// Alternative Method with one loop

function secondLarge(arr : number[]) : number{
    let secondLargest = -1;
    let largest = 0;
    for(let i=1;i<arr.length ; i++){
        if(arr[i]>arr[largest]){
            secondLargest=largest;
            largest = i;

        }
        else if(arr[i]!=arr[largest]){
            if(secondLargest == -1 || arr[i]>arr[secondLargest])
            {
                secondLargest=i;
            }
        }
    }
    return arr[secondLargest]; 
}

console.log(secondLarge([1,2,3,4,5,6,7,8,9,0]))