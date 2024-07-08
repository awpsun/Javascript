//  FUNCTIONS
//METHODS = Built-in Functions.

 function sum(num1, num2){
    return num1+num2;
}
console.log(sum(69,2)); 

function sum(num1, num2){
    console.log(num1);
    console.log(num2);
    if (num2===undefined){
        return num1+num1;
    }
    return num1+num2;
}
console.log(sum(6,12));  */

 function getuseremail(email){
    return email.slice(0, email.indexOf("@"));
}
console.log(getuseremail("terabhai@gmail.com"));

//Anonomous function // works the same
const getuseremail = function (email){
    return email.slice(0, email.indexOf("@"));
}
console.log(getuseremail("terabhai@gmail.com"));

//arrow functions same thingg but function is written as =>
const getuseremail = (email)=> {
    return email.slice(0, email.indexOf("@"));
}
console.log(getuseremail("terabhai@gmail.com")); 

//To proper case names
const Myproper = (myName) =>{
    return myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase();
};
console.log(Myproper("sEBasTiaN"));