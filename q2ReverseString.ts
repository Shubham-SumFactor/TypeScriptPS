const myString = "Anything";

function reverseString(str: string): string{
    return str.split("").reverse().join("");  //splits into separate character , reverse n join

}
const output = reverseString(myString); //hold the result

console.log(output);

// Alternative method

function stringReverse(string:string): string{
    let revString ="";
    for (let i = string.length-1; i>=0; i--){
        revString = revString + string[i];
    }
    return revString;
}
console.log(stringReverse("Random"));

export{}