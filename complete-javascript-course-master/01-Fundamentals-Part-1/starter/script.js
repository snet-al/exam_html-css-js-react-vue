// let js = "amazing";
// if (js === "amazing") {
//     alert("JS is FUN!")
// };

// console.log(40 + 9 + 22 - 10);

/* value & variables */

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let age = 30;

// console.log(`${firstName} is ${age} years old!`);

// let person = "Jonas";

// const PI = 3.1415;

// let myFirstJob = "Coder";
// let currentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// const country = "Albania";
// const continent = 'Europe';
// let language;
// let population = 2;
// const isIsland = false;

// language = "Albanian";

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// const language1 = "Albanian";
// const language2 = "English";
// language = [language1, language2];
// isIsland = true;

// let halfPopulation = population / 2;
// console.log(`${halfPopulation} million`);

// population++;
// console.log(`${population} million`);

// let finlandPopulation = 6;
// console.log(population > finlandPopulation ? true : false);

// let averagePopulation = 33;
// console.log(population < averagePopulation ? true : false);

// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);

// if (population > 33) {
//     console.log(`${country}'s population is above average`);
    
// }else {
//     console.log(`${country}'s population is ${averagePopulation - population} bellow average`);
// }

// console.log('9' - '5'); // -> ?
// console.log('19' - '13' + '17'); // -> ?
// console.log('19' - '13' + 17); // -> ?
// console.log('123' < 57); // -> ?
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?


// let numNeighbours = Number(prompt("How many neighbour countries does your contry have?"));

// if (numNeighbours === 1 ){
//     console.log("Only 1 border!");
// }else if (numNeighbours > 1 ){
//     console.log("More than 1 border!");
// } else {
//     console.log("No borders!");
// }


// if (population < 50 && language.includes("English") && isIsland === false) {
//     console.log(`You should live in ${country} :)`);
// }else {
//     console.log(`${country} does not meet your criteria :(`);
// }

// switch (language) {
//     case "Chinese":
//     case "Mandarin":
//         console.log("MOST number of native speakers!");
//         break;
//     case "Spanish":
//         console.log("2nd place in number of native speakers");
//         break;
//     case "English":
//         console.log("3rd place");
//         break;
//     case "Hindi":
//         console.log("Number 4");
//         break;
//     case "Arabic":
//         console.log("5th most spoken language");
//         break;    
//     default:
//         console.log("Great language too :D");
// }

// console.log(`${country}'s population is ${population > 33 ? "above" : "bellow"} average`);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jon");

// javascriptIsFun = "Yes!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1994;
// console.log(typeof year);

// console.log(typeof null);


// let age = 30;
// age = 31;
// console.log(age);

// const birthYear = 1991;
// birthYear = 1994;
// console.log(birthYear);

// const job;

// var job = 'programmer';
// job = 'teacher';


// Math operators

// const now = 2025;
// const bithday = 1994;
// const ageDerald = now - bithday;
// const ageNeida = now - bithday;
// console.log(`${ageDerald} & ${ageNeida}`);
// console.log(`${ageDerald * 2} & ${ageNeida / 2}`);
// console.log(ageDerald % 2);
// console.log(2 ** 3);

// const firstName = 'Derald';
// const lastName = 'Shehi';
// console.log(firstName + ' ' + lastName);


// Assigment operators

// let x = 10 + 5;
// x += 10; //  x = x + 10;
// console.log(x);
// x *= 4; //  x = x * 4;
// console.log(x);
// x++; //  x = x + 1;
// console.log(x);
// x--; //  x = x - 1;
// console.log(x);
// x--;
// console.log(x);

// Comparison operators 

// console.log(ageDerald > ageNeida);
// console.log(ageDerald <= ageNeida);
// console.log(ageDerald > 18 && ageNeida > 18);



// CHALLENGE 1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/ 
// Data 1:
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// Data 2:
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;


// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / (johnHeight * johnHeight);

// const markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);

// CHALLANGE 2
// if (markHigherBMI) {
//     console.log("Mark's BMI is higher than John's!");
// }else {
//     console.log("John's BMI is higher than Mark's!");
// }

// if (markHigherBMI) {
//     console.log(`Mark's BMI ${markBMI.toFixed(1)} is higher than John's ${johnBMI.toFixed(1)}`);
// }else {
//     console.log(`John's BMI ${johnBMI.toFixed(1)} is higher than Mark's ${markBMI.toFixed(1)}`);
// }



// const firstName = "Derald";
// const job = "programmer";
// const birthYear = 1994;
// const currentYear = 2025;

// const derald =`I'm ${firstName} a ${currentYear - birthYear} years old ${job} !`;
// console.log(derald);
// console.log('String\n\
// with multiple\n\
// lines1');

// console.log(`String
// with multiple
// lines`);

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('You can sart driving license 🚗');
// }else {
//     console.log(`You can't start driving license 🚗`);
// }

// const birthYear = 1994;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// }else {
//     century = 21;
// }

// console.log(century);

// Type conversion
// const inputYear = '1994';
// console.log(Number(inputYear), inputYear);

// console.log(Number(inputYear) + 18);
// console.log(Number('derald'));
// console.log(typeof NaN);
// console.log(String(23), 23);

// // Type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');
// console.log('23' > '18');


// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// 5 falsy value : 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('derald'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const monay = 100;
// if (monay) {
//     console.log("Don't spend it all");
// }else {
//     console.log("You should get a job!");
// };

// let height = 123;
// if (height) {
//     console.log("YAY! Height is defined");
// }else {
//     console.log("Height is UNDEFINED");
// };

// const age = '30';
// if (age === 30) console.log('You just become an adult (strict)');
// if (age == 30) console.log('You just become an adult (loose)');
// const favorite = Number(prompt('What is your favorite number?'));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 33) { // '33' == 33
//     console.log('Cool! 33 an amazing nr');
// }else if (favorite === 7) {
//     console.log('7 is also a cool number');
// } else if (favorite === 9) {
//     console.log('9 is also a cool number');
// }else {

//     console.log('Number is not 33 or 7 or 9');
// }

// if (favorite !== 33) console.log('Why not 33?');

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// };

// const isTired = true; // C

// console.log(hasDriversLicense && hasGoodVision && isTired);


// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

// CHALLENGE 3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// let dolphinsScore = (96 + 108 + 89) / 3;
// let koalasScore = (88 + 91 + 110) / 3;
// dolphinsScore = dolphinsScore.toFixed(1);
// koalasScore = koalasScore.toFixed(1);
//  console.log(dolphinsScore, koalasScore);


// Bonus 1
// let dolphinsScore = (97 + 112 + 101) / 3;
// let koalasScore = (109 + 95 + 123) / 3;
// dolphinsScore = dolphinsScore.toFixed(1);
// koalasScore = koalasScore.toFixed(1);
//  console.log(dolphinsScore, koalasScore);


// // Bonus 2
// let dolphinsScore = (97 + 112 + 101) / 3;
// let koalasScore = (109 + 95 + 106) / 3;
// dolphinsScore = dolphinsScore.toFixed(1);
// koalasScore = koalasScore.toFixed(1);
//  console.log(dolphinsScore, koalasScore);


// if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//     console.log(`Dolphins win the trophy 🏆`);
// } else if (koalasScore > dolphinsScore && koalasScore >= 100) {
//     console.log(`Koalas win the trophy 🏆`);
// }else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100) {
//     console.log(`Both win the trophy 🏆`);
// }else {
//     console.log(`No one wins the trophy 😢`);
// }


// switch statement
// const day = 'monday';

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
//         break;
// }
 


// // if else statement
// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if ( day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
// }
// else {
//     console.log('Not a valid day!');
// }

// const age = 31;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');
// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);
// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);


// CHALLENGE 4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/
// const bill = 275;
// const bill = 40;
// const bill = 430;
// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill
//     + tip}`);

