//LOOP
//while loop
let aNumber = 10;
while (aNumber <=10){
    aNumber+=2;
    console.log(aNumber);
  
}
//do loop
let hisNumber = 100;
do { //do runs the code atleast 1 times where as while only runs if it can run more than 1time
    hisNumber+=2;
    console.log(hisNumber);
}   while (hisNumber <100)


//for loop
for (let i = 0; i<=10; i++){
    console.log(i);
}

//while true
let myName= "Sebastian Vettel"
let counter = 0; //counter is a variable like index
let myLetter;
while (true){
    myLetter= myName[counter];
    console.log(myLetter);
    if (counter ===1){
        counter+=2;
        continue;//tells the loop to start from the top again
    }
    if (myLetter ==="l") break; 
    counter++;
}
console.log(counter);   
