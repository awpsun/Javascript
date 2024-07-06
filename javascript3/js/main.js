// Strings
const myVariable = "Mathematic";

// Length Property
console.log("Mynameisverygoodboy".length);

//string method
console.log(myVariable.charAt(0)); //character jo hoga uss posiiton pr wo baateega
console.log(myVariable.indexOf("at")); //first posiiton bataeyga
console.log(myVariable.lastIndexOf("at")); //last wala position batayega
console.log(myVariable.slice(0,3)); // range mein dega
console.log(myVariable.slice(0)); // last tak saara dega
console.log(myVariable.slice(5));
console.log(myVariable.toUpperCase());
console.log(myVariable.includes("M")); //boolean data
console.log(myVariable.includes("div"));
console.log(myVariable.split("e")); //uss word se split kr dega, character e is not included the resulting string
console.log(myVariable.split("")); //empty string denege toh saara string individually dega
console.log("Lewis, Sebastian, Max".split(",")); //, dene se jaha bhi , hoga js usko as a individual string treat karega
console.log("Here comes Sebastian Vettel".split(" ")); //' ' space dene se har word individual string ban jayega 