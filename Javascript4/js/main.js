//Numbers

//An integer is a whole number

const myNumber = 69;

//A number with a decimal point is a float which references the "floating point"
const myFloat = 69.69; //Js thinks float and integer as number types
console.log(myNumber); 
console.log(myFloat);

const myString = "42";
console.log(myString);
console.log(myString + ' '+ "Vettel" );

console.log(Number(myString)+ 3); //my string ko as a number consider karega js
const myString2 = "Ferrari"
console.log(Number(myString2)); //Gives an error NaN (not a number) this can easily happen with a string data or undefiend data 
console.log(Number(undefined)); //NaN  
console.log(Number(false)); // Boolean data will give 0/1 //0 is false in javascript

console.log(Number.isInteger(myString)); //integer checking facility 
console.log(Number.isInteger(myFloat)); //not an integer
console.log(Number.isInteger(myNumber)); //True ayega as console log
const myFloat2 = "69.ab32f";
console.log(Number.parseFloat(myFloat2)); //kuch toh krta hai but idk
console.log(myFloat.toFixed(3)); //returns string data??