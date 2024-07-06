//Conditionals: Switch Statements

//Santax
/* switch (expression OR value) {
    case choice1:
        //run this code
        break;
    case choice2:
        //run this different code
        break;
    //add many different cases as needed
    default:
        //run this code if no case matches
        //no need for a break here
}  */

switch ("2"){ //2 here is a string hence the answer will be a no match
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("No match");
        
}


switch (Math.floor(Math.random()*5+1)){ //2 here is a string hence the answer will be a no match //you can input even math at switch condition/expression
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("No match");
        
}

let playerOne="rock"
let computer="paper"

switch (playerOne){
    case computer:
        console.log("tie game")
        break;
    case "rock"{
        if (computer === "paper"){
            console.log("Computer wins")
        }
        else {
            console.log("playerOne wins")
        }
        
}       