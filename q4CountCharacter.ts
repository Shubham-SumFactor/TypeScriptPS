// Write a function that takes a string as input and returns the count of each character in the string.

function countChar(str : string): void | undefined {
    
    if (str.length === 0) {
      console.log("Invalid string");
      return undefined;
    }
  
    // traversing the string
    for (let i = 0; i < str.length; i++) {
      
      let count = 0; // inner loop to check the occurences
      for (let j = 0; j < str.length; j++) {
        if (str[i] == str[j] && i > j) {
          break;
        }
        if (str[i] == str[j]) {
          count++;
        }
      }
      if (count > 0) {
        console.log(str[i]+ " occurs " + count +" times");
      }
    }
  }
  

  console.log(countChar("hello"));
  

  //Alternative Method with single loop
  
  function countCharacter(str: string): object {

    let countEach ={}; //initialization of empty object as OP will be stored here
    for (let i = 0; i< str.length;i++){
      let ch = str.charAt(i);// ch variable is assigned to current index of the loop
      if(countEach[ch]){// checks if current character exists
        countEach[ch]++;//if yes increment
      }
    
      else{
      countEach[ch]=1; //if not exist, then assign value 1  
    }
  }
  return countEach;
  }
console.log(countCharacter("HEllo World"));