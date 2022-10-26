// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;


// character = 23
character = "Doe"

// age = "done"
age = 25;  

// isLoggedIn = "asdf"
isLoggedIn = true;

// arrays
let ninjas: string[];
let hokage: string[] = []; // need to add [] to use push method


// ninjas = [23, 40]
ninjas = ["John","Doe"]
hokage.push("Recka hanabishi")

console.log(hokage)

// union types
let mixed: (string|number|boolean)[] = [];

mixed.push("John Doe");
mixed.push(28);
mixed.push(true)

let uid: string|number;
uid = "123";
uid = 123

console.log(mixed)

// objects

let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };

let ninjaTwo: {
    name: string,
    age: number,
    isBirthday: boolean
}

ninjaTwo = {
    name: "john doe",
    age : 28,
    isBirthday : false
}

console.log(ninjaTwo)