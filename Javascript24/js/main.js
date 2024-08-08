//Modules
//they're usually used to export different section of codes, from one file to another and ofc after that code is exported you import it into another file
    
import * as Formula1 from "./driver.js"; //treating formula1 as a class
/* import playF1 from "./driver.js";
import { driveF1 as DTS, tyreDegred as NIG } from "./driver.js"; */
console.log(Formula1.default()); //to avoid this don't use default function if you're exporting all *
console.log(Formula1.driveF1());
console.log(Formula1.tyreDegred());

import user from "./user.js";
const me = new user("maxverstappen1@gmail.com","Max Verstappen");
console.log(me);
console.log(me.greeting());