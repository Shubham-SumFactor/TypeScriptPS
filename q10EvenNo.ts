//Write a function that takes an array of numbers as input and returns a new array containing only the even numbers in the original array.
function SeparateEvenNumber(num: number[]): number[]{
    const evenNumbers :number[] = []; //empty array 

    for (let i=0; i<num.length; i++){
        if(num[i] % 2 ===0){
          evenNumbers.push(num[i]);  
        }
    }
return evenNumbers;
}

const num = [1,2,3,4,5,6,7,8];
const evenNumbers = SeparateEvenNumber(num);
console.log(evenNumbers);

