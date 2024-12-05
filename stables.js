
// 🌞🌻🌼🌸🌞🌺🌷🌹🌞
// _,,)🎩\.~,,._
// (💚)`  ``)\)❇️),,_
// 💓|     \ ''((\)))))),,_          ____
//  |6`   |   ''((\💚))) "-.____.-"    `-.-,
//  |    .'\    ''))))'                  \))❇️
//   |   |   `.     ''                     ((((
//   \, _)     \/                          |))))
//   `'🍓      |                          (💚(((
//             \                  |       ))))))
//              `|    |           ,\     /((((((
//               |   / `\         <  \   |  )))❇️)
//               |   |   ._______.`. \  \  ((((
//             🧹|  / \ |           `.\  | (💚(🧹
//               \  | | |             )| |  ))
//                | | | |            / | |  '
//                | | /_(           /_(/ /
//                /_(/__]           \_/_(
//               /__]                /__]


let horses = [];
let messageForVisitors = "Welcome to Magical Stable!";
let LATE_PAYMENT_FEE = 1000;
let availableStalls = 10; 

console.log(messageForVisitors)

function Horse(name, nickname, faveTreat, colour, age, monthlyRent, isInStable, isHungry) {
    this.name = name;
    this.nickname = nickname;
    this.faveTreat = faveTreat;
    this.colour = colour;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.isInStable = isInStable;
    this.isHungry = isHungry;
    this.rentNotice = function(daysUntilDue) {
        console.log(`${this.name}'s rent is due in ${daysUntilDue}, and is $${this.monthlyRent}!`);
    }
    this.checkLocation = function() {
        if (this.isInStable == true) {
            console.log(`${this.name} is in the stable now, resting!`)
        } else {
            console.log(`${this.name} is out of the stable. Want to run!`)
        };
    };
};

function introduction(horses) {
    console.log(horses.name + " is happy to meet you. 💖 " + horses.faveTreat + " is favourite treat! And nickname is " + horses.nickname + "!");
}


let elphaba = new Horse("Elphaba", "Wicked Wizard", "🍓 Strawberry", "Green", 3, 1000, true, false);
let glinda = new Horse("Glinda", "Princess", "🫑 Green Pepper", "Pink", 2, 2000, false, false);
let fiyero = new Horse("Fiyero", "Prince", "🌷 Flower", "Yellow", 4, 500, false, true);


horses.push (
    new Horse("Elphaba", "Wicked Wizard", "🍓 Strawberry", "Green", 3, 1000, true, false),
    new Horse("Glinda", "Princess", "🫑 Green Pepper", "Pink", 2, 2000, false, false),
    new Horse("Fiyero", "Prince", "🌷 Flower", "Yellow", 4, 500, false, true),
);

elphaba.rentNotice(10)
glinda.rentNotice(5)
fiyero.rentNotice(15)

horses[0].checkLocation()
horses[1].checkLocation()
horses[2].checkLocation()



introduction(horses[0]);
introduction(horses[1]);
introduction(horses[2]);


let visitorHorse = {
    name : "Boq",
    nickname : "Munchkin",
    faveTreat : "🍎 Apple",
    colour : "Orange",
    age : 5,
    monthlyRent : 10,
    isInStable : true,
    isHungry : true,
};

horses.push (visitorHorse);

introduction(visitorHorse);


for (let i = 0; i < horses.length; i++) {
if (horses[i].isInStable == true) {
    console.log(horses[i].name + " is in the stable. Want to be alone.");
} else {
    console.log(horses[i].name + " is looking at the sky. Curious about the birds.");
}
}

for (let i = 0; i < horses.length; i++) {
if (horses[i].isHungry == true) {
    console.log(horses[i].name + " is thinking about food. Hungry...");
} else {
    console.log(horses[i].name + " is not hungry. Lose appetite for some reason...");
}
}

console.log("In our magical stable, " + (availableStalls - horses.length) + " more horses can be in the stalls!"); 


if (availableStalls - horses.length < 2) {
    console.log("We need to build more stalls!")
} else {
    console.log(`We have ${availableStalls - horses.length} available! Join our stable now!`)
}

function latePayment(horse, rentDueDate) {
    console.log(`${horse.name}'s rent due date is late, and is $${horse.monthlyRent}! Late payment fee is $${LATE_PAYMENT_FEE}! Pay promptly!`);
}

latePayment(horses[0]);
latePayment(horses[1]);
latePayment(horses[2]);


for (let i = 0; i < horses.length; i++) {
    if (horses[i].faveTreat == "🌷 Flower" === true) {
        console.log(horses[i].name + " loves eating " + horses[i].faveTreat + "! Happy to eat now!");
    } else {
        console.log(horses[i].name + " wants to eat some " + horses[i].faveTreat + ". Keep checking!")
    };
}


function getHorseNicknames(horse, friend, friend2, friend3) {
    let string = `${horses[0].name}'s nickname is ${horses[0].nickname}, 
and they have a friend named ${horses[1].name}, who is nicknamed ${horses[1].nickname}!
And ${horses[2].name}'s nickname is ${horses[2].nickname}.
Lastly, ${horses[3].name}'s nickname is ${horses[3].nickname}!`;

    return string;
}

let horseNicknamesString = getHorseNicknames(0, 1, 2, 3);
console.log(horseNicknamesString);


function findHungryHorse(horses) {
    for (let i = 0; i < horses.length; i++){
        if (horses[i].isHungry == true) {
            console.log(horses[i].name + " is hungry now. Crying for food!");
        } else {
            console.log(horses[i].name + " is not hungry. Maybe later!");
        }
    }
}

findHungryHorse(horses);


function moveAllHorsesOutside(horses) {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].isInStable == true) {
            horses[i].isInStable = false;
            console.log(horses[i].name + " is now out of the stable, Run!");
        } else {
            console.log(horses[i].name + " has been outside already.");
        }
    }
}

moveAllHorsesOutside(horses);



horses.push (
    new Horse("Harry", "Great Wizard", "Butter Beer", "Red", 5, 300, true, true),
    new Horse("Ron", "Ronnie", "Jelly Bean", "White", 6, 200, false, true),
    new Horse("Hermione", "Big Brain", "Chocolate Frog", "Blue", 7, 450, false, false),
);

function switchHorsesInsideout(horses) {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].isInStable == true) {
            horses[i].isInStable = false;
            console.log(horses[i].name + " is out now, Get some fresh air!");
        }   else {
            horses[i].isInStable = true;
            console.log(horses[i].name + " is in the stable now.");
        }
    }
}

switchHorsesInsideout(horses);

function dinnerTime(horses) {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].isInStable == false) {
            horses[i].isInStable = true; 
            console.log(horses[i].name + " is in the stable, " + horses[i].faveTreat + " is ready!");
        } 

        if (horses[i].isHungry == true) {
            horses[i].isHungry = false;
            console.log(horses[i].name + " is full, no food for now."); 
        }
    }
}

dinnerTime (horses);



horses.push (
    new Horse("Sirius", "Padfoot", "Sherbet Lemon", "Grey", 10, 500, true, true),
    new Horse("Rupin", "Moony", "Pumpkin Pie", "Gold", 11, 550, false, false),
    new Horse("James", "Prongs", "Yorkshire Pudding", "Silver", 12, 600, true, true),
);

let isDark = true;

function moveAllHorsesInside(horses, isDark) {
    for (let i = 0; i < horses.length; i++) {
        if (isDark) {
            if (horses[i].isInStable == false) {
                horses[i].isInStable = true;
                console.log(horses[i].name + " came into the stable. Hit the hay!");
            } else {
                console.log(horses[i].name + " was ready to sleep. Good night!");
            }
        }
    }
}

moveAllHorsesInside(horses, isDark);


function moveAllHorsesOutside(horses, isDark) {
    for (let i = 0; i < horses.length; i++) {
        if (isDark) {
            if (horses[i].isInStable == true) {
                horses[i].isInStable = false;
                console.log(horses[i].name + " just got up. Go out and enjoy the morning sunshine!");
            }
        }
    }
}

moveAllHorsesOutside(horses, isDark);


console.log("Thanks for visiting our magical stable. Currently " + (availableStalls - horses.length) + " stall available. Come again!");
