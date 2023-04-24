// Write a function that takes a string as input and returns the count of each character in the string.

function countChar(str : string): void {
    
    if (str.length === 0) {
      console.log("Invalid string");
      return;
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
  