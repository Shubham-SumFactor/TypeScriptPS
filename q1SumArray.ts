export{}
const myArray: number[] = [1, 2, 3, 4, 5];
function sumArray(arr: number[]): number {
    // sumArray that takes an array of numbers as input n returns op as number
  
    let sum = 0; 
  
    for (let i = 0; i < arr.length; i++) {

      sum = sum + arr[i];
    }
  
    return sum;
  }

console.log(sumArray(myArray)); 