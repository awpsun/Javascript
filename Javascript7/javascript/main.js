//Conditionals: If statememnts

//Santax
/* if (condition) {
    //run some code
} else{
    //run some code
} */
//Test score and Marks distribution
let testScore = 49;
let collegeStudent = false;
let grade;
if (testScore>=90){
    grade="A";
}
else if(testScore>=80){
    grade="B";
}
else if (testScore>= 70){
    grade="C";
}
else if(testScore>=60){
    grade="D";
}
else if(testScore>=50){
    grade="E";
}
else {
    if (collegeStudent) 
        {grade="College student hai na issely pass kr dia";}
    else {
        grade="School Student hai na issely pass kr dia";
    }

}
console.log(grade);
console.log(collegeStudent);

//Descision Tree
if (playerOne === computer){
    //tie game!

} else if (playerOne === "rock"){
    if(computer === "paper")  {
        //Computer Wins

    } else {
        //Player1 wins
    }
}
} else if (playerOne === "paper"){
    if(computer === "scissors")  {
        //Computer Wins

    } else {
        //Player1 wins
    }
}
