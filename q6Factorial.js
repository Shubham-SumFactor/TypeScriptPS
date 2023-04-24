// Write a function that takes a number as input and returns the factorial of that number.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    /*  else if (n ===1){
          return 1;  1* fact(0) =1*1
      }*/
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(6));
