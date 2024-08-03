//Web Storage API
//Not part of the DOM - refers to the Window API
//We don't have to type window. It is already implied:

window.alert(window.location);

//windows.localstorage
//windos.sessionstorage
const myArray= ["Eat", "Sleep", "Game", "repeat"];
const myObj = {
    name: "Lewis",
    hobbies: ["Eat", "Sleep", "Game", "repeat"],
    logName: function() {
        console.log(this.name);
    }
};



myObj.logName();
console.log(myArray);

//session data will store only data for that session once closed it will be erased
//local storage data will be persistance and will even be there after you close the browser(in the broswer)

localStorage.setItem("mySessionStorage", JSON.stringify(myArray)); //JSON only store string data
/* localStorage.removeItem("mySessionStorage"); //return null
localStorage.clear(); */
const key = localStorage.key(0); //first key in the local storage 
const lenth = localStorage.length; //to find out the number of keys
const mySessionData =JSON.parse(sessionStorage.getItem("mySessionStorage"));
console.log(mySessionData);
console.log(lenth);

//session storage and local storage only store string data 
//if the data is not string data it  will try to convert it into string data
//it's almost like working with json