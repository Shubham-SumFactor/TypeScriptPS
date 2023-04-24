//Write a function that takes a string as input and returns true if the string is a palindrome, and false otherwise.
// reverse of string === string then its a palindrome
function reverseString(str) {
    var newString = ""; //holder
    for (var i = str.length - 1; i >= 0; i--) {
        newString = newString + str[i];
    }
    console.log(newString);
    if (newString === str) {
        return true;
    }
    else {
        return false;
    }
}
console.log(reverseString('abcba'));
