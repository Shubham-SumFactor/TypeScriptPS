var myString = "Anything";
function reverseString(str) {
    return str.split("").reverse().join(""); //splits into separate character , reverse n join
}
var output = reverseString(myString); //hold the result
console.log(output);
// Alternative method
function stringReverse(string) {
    var revString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        revString = revString + string[i];
    }
    return revString;
}
console.log(stringReverse("Random"));
