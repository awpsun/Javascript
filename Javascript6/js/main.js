//Code that will return a random letter from your name

console.log("Sebastian".charAt())
console.log(Math.floor(Math.random()*9)+1);

console.log("Sebastian".charAt(Math.floor(Math.random()*8))); // we removed +1 as we needed the 0 index also we used 1 less as we need the 0 index

//
const anyName = "LewisHamilton" 
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length))); //this solution will work for any name and any number of characters in that name.
//break the program into smaller problems more doable ones and think it thru and bring the solutions together, to solve the overall larger issue