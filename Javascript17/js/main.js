//Objects 
//Objects come in Key:Value Pair in curly braces

const myObj = {name: "Vettel"};
const anotherObj={
    alive:true,
    answer:69,    hobbies:["eat","sleep","code","repeat"],
    drinks: {
        morning:"Coffee",
        afternoon:"Milk",
        evening:"ProteinPowerder+Milk"
    },
    action: function (){
        return `time for ${this.drinks.morning}` //this refferes to the object
    }
};
console.log(myObj.name);
console.log(anotherObj.answer);
console.log(anotherObj.alive);
console.log(anotherObj.drinks.afternoon);
console.log(anotherObj.hobbies[1]);
console.log(anotherObj.action());

const vehical = {
    wheels:4,
    engine: function(){
        return "Vroom Vroom Vroom";
    }
}
const truck = Object.create(vehical);
truck.doors = 2;
const car =Object.create(vehical);
car.doors =4;
car.engine = function(){return "Pheew Pheew!!!!"}

console.log(truck);
console.log(truck.wheels); //inheritance 
console.log(truck.engine()); //function is always defined as function()
console.log(car);
console.log(car.doors);
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla);
console.log(tesla.wheels);
tesla.engine = function(){
    return "Shhhh..."
}
console.log(tesla.engine());


const f1Team = {
    Driver1: "Max Verstappen",
    Driver2: "Carlos Sainz",
    TeamPrincipal: "James Vowels",
    TeamName: "Oracle Red Bull racing"
};
/* delete f1Team.Driver2; */
console.log(Object.keys(f1Team))
console.log(Object.values(f1Team))

for (let jobs in f1Team){
    console.log(`on ${jobs}, it's ${f1Team[jobs]}`);
}
console.log(f1Team.hasOwnProperty("Driver2")); //returns a boolean value if the property exsits or not)


//Destructuring objects
const {Driver2: MyVar, Driver1: MyVar2} = f1Team
console.log(MyVar,MyVar2); 