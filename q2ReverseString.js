var myString = "Anything";
function reverseString(str) {
    return str.split("").reverse().join(""); //splits into separate character
}
var output = reverseString(myString); //hold the result
console.log(output);
