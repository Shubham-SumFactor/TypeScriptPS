//Write a function that takes two arrays as input and returns a new array containing the elements that are common in both arrays.

function findCommonElements(array1: any[], array2: any[]){
    const commonElements : any[] = []; //array to store common elements 

    for (let i = 0; i < array1.length; i++ )
    
    { //to traverse array 1
        const currentElement = array1[i];  // const CE for comparison in loop2 j
        let found :boolean = false;  

          for (let j =0; j< array2.length; j++ )
            { // to traverse array 2
               if(array2[j] === currentElement)
               {
                    found = true;
                    break // exiting j loop 
                }
            }
        if (found === true)
        {
            commonElements.push(currentElement);
        }
    }
    
return commonElements;

}

const array1 = [1,2,3,4,5,6,7,8,9,10];
const array2 = [3,7,9,11,22,33,44,10];

const commonElements = findCommonElements(array1, array2);
console.log(commonElements);


//Alternative Method

function newCommonElements(arr1: number[], arr2: number[]): number[]  {
    const common = [];
    for (const el of arr1) {
      if (arr2.includes(el)) {
        common.push(el);
      }
    }
    return common;
  }

 //const arr1 =[1,2,3,4];
  //const arr2 =[2,3,5];
 console.log(newCommonElements([1,2,3,4],[2,3,5])); 

 /*{ in tsconfig.json
  "compilerOptions": {
    "target": "es5",
    "lib": ["es2016"]
  }
} */