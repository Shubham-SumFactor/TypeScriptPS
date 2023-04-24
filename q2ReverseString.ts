const myString = "Anything";

function reverseString(str: string): string{
    return str.split("").reverse().join("");  //splits into separate character , reverse n join

}
const output = reverseString(myString); //hold the result

console.log(output);


