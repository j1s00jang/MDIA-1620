console.log("horses are great!")

let horseName = "CoolGuy" //hahaha this is comment or note 
horseName = "Charlie" // for strings, prefer double quotes
let horseAge = 5; // number doesnt need quotes. why? computer recognizes as a word or code not a number. if i make a code for caculation, it would not work as number. 
console.log(horseName);
console.log(horseAge);
let isHorseInStable = true; // true or false 
console.log(isHorseInStable); 
isHorseInStable = false;
horseName = "Harry"
horseAge = 5;
console.log(horseName);

console.log(typeof 890224)
console.log(typeof "890225")
console.log(typeof horseAge);
console.log(horseName);

const STABLES_MONTHLY_FEE = 1000;
let horseIntroduction = " has strong legs and his nickname is "
let horseAgeIn10Years = horseAge + 10;

let horseNickName = "Potter"

console.log(horseNickName + horseIntroduction);
console.log(horseName + horseIntroduction + horseNickName);
let savings = STABLES_MONTHLY_FEE * 3 * 0.10;

console.log(`With this discount I save $${savings}.`);


// LESSON-5 Code true value=more than 1 or false=0 
// if you put true in bracket, console log shows it you put false, no shows

let isHorseInside = true;

if (isHorseInside) {
    console.log(horseName + " is inside.")
}

let visitingHorseName = "🪄 Ron"

// Strawberry !== (doesnt' equal) Harry
if (horseName == "Harry") {
    console.log(visitingHorseName + " has come to visit the stables!")
} else {
    console.log(horseName + " is lonely!")
}
// ! is negation. runs if the condition is false
// is horseinside is false. so horse is outside. 

if (horseName === "Harry" && visitingHorseName === "🪄 Ron" && isHorseInside) {
    console.log(`${horseName} has a visitor and their name is ${visitingHorseName}`);
} else {
    console.log(horseName + " needs to figure out what to do.")
}


// lesson 6 code 
//let word = "Pumpkin";
//console.log(word.charAt(0));
// it shows "R"
//console.log(word.charAt(2));
// it shows "m" because In JavaScript, indexes start at "0"

// Arrays let you store multiple items under one variable declaration + always comes with [ ] and , 
// Horse = ["name", age, isInside]
let horseOne = [horseName, horseAge, isHorseInside, horseNickName];
let horseTwo = ["Strawberry", 2, false, "Pie"];

console.log(horseOne);
console.log(horseTwo);
console.log(horseOne.length);
// length means how many items in your array 
horseOne.push("red");
// this add up at the end of array
console.log(horseOne);

console.log(horseOne[0] + "'s nickname is " + horseOne[3]);
console.log(`${horseTwo[0]}'s nickname is ${horseTwo[3]}`);
// two different way to bring up from arrays 

console.log(horseOne[1] + horseTwo[1]);

if (horseOne[1] === 3) {
    console.log(horseOne[0] + " is 3");
} else {
    console.log(horseOne[0] + " is NOT 3");
}
console.log(horseOne[0] + " and " + horseTwo[0] + " are staying at the stables");


let horseNames = [horseName, "Hermione", "Ron"];
let horseAges = [horseAge, 3, 2];
let horseNicknames = [horseNickName, "Pie", "Wisley"];
let areHorsesInside = [isHorseInside, false, true]; 

let horseIntro = `There are ${horseNames.length} horses staying at my stables: ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}!`;
console.log(horseIntro);

let differentHorseIntro = 
"There are " + horseNames.length + " horses staying at my stables: " 
+ horseNames[0] + ", " + horseNames[1] + ", " + horseNames[2] + "!";
console.log(differentHorseIntro);


// LAB TODAY by Sunday 10/13
//stables.js
// - output an introduction to your horses 
// - output whether your horses are inside or outside AT LEAST THREE HORSES !!! 
// Readme
// 3 confusing things
// 3 things you feel like you have a solid understanding of 
// analogies that you use to think about things (gif)

let labPracticeHorseIntro = 
"They are " + horseNames.length + " best friends in the world: "
+ horseNames [0] + ", " + horseNames[1] + ", " + horseNames[2] + "!!";
console.log(labPracticeHorseIntro);

if (isHorseInside === true) {
    console.log(`${horseName}` + " wants to be inside today. " + `${visitingHorseName}` + " wants to play outside.");
} else {
    console.log(`${horseName}` + " wants play outside!");
}

let thirdHorseName = "Hermione"

if (isHorseInside === true) {
    console.log(`${thirdHorseName}` + " wants read books inside.");
} else { 
    console.log(`${thirdHorseName}` + " wants to be outside.");
}