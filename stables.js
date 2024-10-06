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