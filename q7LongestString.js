//Write a function that takes an array of strings as input and returns the longest string in the array.
function findLongestString(strArr) {
    var longestString = "";
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i].length > longestString.length) {
            longestString = strArr[i];
        }
    }
    return longestString;
}
var strArr = ['knowledge', 'educational', 'professionalism', 'dictionary'];
var longestString = findLongestString(strArr);
console.log(longestString);
