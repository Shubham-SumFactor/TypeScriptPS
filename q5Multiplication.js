function multiplication(num1, num2) {
    var maxNum = num1 > num2 ? num1 : num2;
    var newMax = maxNum != num1 ? num1 : num2;
    var result = 0;
    for (var i = 0; i < maxNum; i++) {
        result = result + num1; // 2 = 0+2 | 4 = 2+2 | 6= 4+2| i=3 loop out
    }
    return result;
}
var num1 = 2;
var num2 = 3;
var finalResult = multiplication(num1, num2);
console.log(finalResult);
