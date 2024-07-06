//User input
alert('hello world!');
let myBoolean = confirm("Click Ok to confirm === true \nCLick Cancel to go back === false");
console.log(myBoolean);

let MyName = prompt("Please Enter Your Name"); //prompt is used to take data from the user
console.log(typeof MyName);

if (MyName) {
    console.log(MyName.length);
    console.log(MyName.trim().length); //this shows the name after removing white spaces
    console.log(MyName);
} else {
    console.log("You didn't enter your name");
}
//if we cancel we get null value //here ?? is used to nullify the null value as we can't do certain things with null value but we can do it with the other value we use as a string after ??

//if my name has value then my name print kro and agar value nahi hoga toh print krna else statement