//Conditionals: Ternary Operator
// Ternary is like chota version of if and else yaha pr ek condition dete ho and uske baad question mark agar wo condition tru hogi toh iftrue print hoga and agar false hogi toh : colon ke baad wala statement print hoga
//Syntax
//Condition ? ifTrue : ifFalse;
 let worldchampion = "Sebastian Vettel" // undefined is false // agar yaha pr seb ko hta du to lewis ham ho jayega
 let response = worldchampion ? "Yes Sebastian Vettel is the world Champion" : "Lewis Hamilton is the world champion";
 console.log(response);


 let soup = "chicken Noodles Soup";
 let isCustomerBanned = true;
 let soupaccess = isCustomerBanned ?"sorry no soup for you" : soup ?'Yes, we have soup today' : "Sorry, no soup today";
 console.log(soupaccess);

 let pizza = "Chicken Pizza";
 let Banned = false;
 let pizzaaccess = Banned ? "Sorry brother no Pizza for you due to your past works" : pizza ? "Yes Man we have pizza for you <3" : "NO CAN DO"
 console.log(pizzaaccess);

 //thora dimag lagana it's a good thinking skill

 let testScore =79;
 let myGrade = testScore>89 ? "A+" : testScore>79 ? "B+" : testScore>69 ? "C+" : testScore>59 ? 'JUST PASSED 2nd Division' : "Barely PASSED";
console.log(myGrade);


