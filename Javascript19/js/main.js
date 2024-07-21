//JSON - JAVASCRIPT OBJECT NOTATION
//JSON IS USED TO SEND AND RECEIVE DATA.
//JSON IS A TEXT FORMAT THAT IS COMPLETELY LANGUAGE INDEPENDENT.
//MEANING JSON is used to send and receive data in many languages and not just in javascript.

const myObj = {
    name: "Sebastian Vettel",
    hobbies: ["Driving an f1 car","Watching old f1 races", "Helping other drivers"],
    hello: function() {
        return console.log("Hello fellow F1 Driver");
    }
};

console.log(myObj);
console.log(myObj.name);
myObj.hello;
console.log(typeof myObj);
LargestContentfulPaint
const sendJSON = JSON.stringify(myObj); //json don't convert function
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);
