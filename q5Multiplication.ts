function multiplication(num1:number, num2 :number): number{

    const maxNum=num1>num2 ? num1 : num2;
    const newMax=maxNum!=num1 ? num1 : num2;
    
    let result = 0;

    for (let i = 0; i<maxNum; i++){
        result = result + num1; // 2 = 0+2 | 4 = 2+2 | 6= 4+2| i=3 loop out
    }
return result;
}
const num1 = 2;
const num2 =3;
const finalResult = multiplication(num1,num2);
console.log(finalResult);