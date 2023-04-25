// Write a function that takes a string as input and returns the count of each character in the string.
function countChar(str) {
    if (str.length === 0) {
        console.log("Invalid string");
        return undefined;
    }
    // traversing the string
    for (var i = 0; i < str.length; i++) {
        var count = 0; // inner loop to check the occurences
        for (var j = 0; j < str.length; j++) {
            if (str[i] == str[j] && i > j) {
                break;
            }
            if (str[i] == str[j]) {
                count++;
            }
        }
        if (count > 0) {
            console.log(str[i] + " occurs " + count + " times");
        }
    }
}
console.log(countChar("hello"));
//Alternative Method with single loop
function countCharacter(str) {
    var countEach = {}; //initialization of empty object as OP will be stored here
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i); // ch variable is assigned to current index of the loop
        if (countEach[ch]) { // checks if current character exists
            countEach[ch]++; //if yes increment
        }
        else {
            countEach[ch] = 1; //if not exist, then assign value 1  
        }
    }
    return countEach;
}
console.log(countCharacter("HEllo World"));
