function multiplication(num1:number, num2 :number): number{

    let result = 0;

    for (let i = 0; i<num2; i++){
        result = result + num1; // 2 = 0+2 | 4 = 2+2 | 6= 4+2| i=3 loop out
    }
return result;
}
const num1 = 2;
const num2 =3;
const finalResult = multiplication(num1,num2);
console.log(finalResult);