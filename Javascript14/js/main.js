/* //var let and const- all 3 are used to inialize variable in java script

var x=1;
var x=2;
console.log(x); //in the above case var gets reassigned 

let y=1;
let y=2;
console.log(y); // in thise case javascript will show an error as let can't be assigned to 2 constants

//global scope
var x=1;
let y=2;
const z=3;

//local scope
{
    let y=4;
    console.log(y);
}

//local scope

function myFunc(){ //{is a block of code}
    const z=5;
}
console.log(y); */

//GLOBAL SCOPE
var x=1; //function scoped
let y=2; //block scoped
const z=3; 

console.log(`global ${x}`);
console.log(`global ${y}`);
console.log(`global ${z}`);

function meraFunction() { //use `(csgo wala)
    var x=69; //var is function scoped
    const z=90; //blocked scoped
    

    {
        var x=12;
        const z=6;
        console.log(`block ${x}`);
        console.log(`block ${y}`);
        console.log(`block ${z}`);
    }//block always pulls from the parents
     //blocks generally upar jaake dhundta hai
     console.log(`function ${x}`);
     console.log(`function ${y}`);
     console.log(`function ${z}`);

}
meraFunction();