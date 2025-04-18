'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 543;

// const if = 22;

// function logger () {
//     console.log('My name is Jonas');
// }
// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;    
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const applesOrangesJuice = fruitProcessor(2,3);
// console.log(applesOrangesJuice);


// funciton declaration
// function calcAge1(birthYear) {
//     return 2025 - birthYear;
// }

// const age1 = calcAge1(1994);

// // function expression

// const calcAge2 = function (birthYear){
//     return 2025 - birthYear;
// }

// const age2 = calcAge2(1994);
// console.log(age1, age2);

// Arrow function
// const calcAge3 = birthYear => 2025 - birthYear;
// const age3 = calcAge3(2001);
// console.log(age3);


// const yearsUntilRetirement = (birthYear, firstName) =>{
//     const age = 2025 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1994, 'Derald'));
// console.log(yearsUntilRetirement(2001, 'Bob'));



// function cutFruitPieces(fruit) {
//     return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangeOises= cutFruitPieces(oranges);
//         const juice = `Juice with ${applePieces} apples pieces and ${orangeOises} oranges pieces`;
//         return juice;    
//     }
//     console.log(fruitProcessor(2,3));

// const calcAge = function (birhthYear){
//     return 2025 - birhthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//         const age =calcAge( birthYear );
//         const retirement = 65 - age;

//         if (retirement > 0) {
//             console.log(`${firstName} retires in ${retirement} years`);
//             return retirement;
            
//         }else {
//             return -1;
//             console.log(`${firstName} has already retired`);
            
//         }
//     };

// const answer = yearsUntilRetirement(1994, 'Derald');
// console.log(answer);


// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, 
which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated 
(so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters 
('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, 
according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// Test 1
// const calcAverage = (a, b, c ) => (a + b + c)/ 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2 ) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     }else if(avgKoalas >= avgDolphins * 2){
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     }
//     else {
//         console.log('No team wins...');
//     }   
// }
// checkWinner(scoreDolphins, scoreKoalas);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);


// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Derald';
// const derald = [firstName, 'Shehi', 2025-1994, 'developer', friends];
// console.log(derald);
// console.log(derald.length);

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// // add elements
// const newFriends = friends.push('Jay');
// console.log(newFriends);

// friends.unshift('John');
// console.log(friends);
// // remove elements
// friends.pop();//last 
// const popped = friends.pop();
// console.log(popped);
// console.log(friends); 

// friends.shift();//first
// console.log(friends);

// // index of element 
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Michael'));

// // check if element is in array
// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Peter')) {
//     console.log('You have a friend called Peter');
// } else {
//     console.log('Peter is not in your friends list ');
// }

// Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: 
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, 
calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). 
Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, 
calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, 
and that value can actually be the returned value of a function! 
So you can just call a function as array values (so don't store the tip values in separate variables first, 
but right in the new array) 😉

GOOD LUCK 😀
*/
// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);


// const jonasArray = [
//     'jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['michael'],
// ];

// const jonas = {
//     firstName :'Jonas',
//     lastName :'Schmedtmann',
//     age : 2037 - 1991,
//     job: 'teacher',
//     friends :['michael', 'bob', 'peter'],
// };
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'); 
// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// }
// console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// //Challenge
// // "Jonas has 3 friends, and his best friend is called Michael"

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is callet ${jonas.friends[0]}`);

// const jonas = {
//         firstName :'Jonas',
//         lastName :'Schmedtmann',
//         birthYear: 1994,
//         job: 'teacher',
//         friends :['michael', 'bob', 'peter'],
//         hasDriversLicense: true,

//         calcAge: function () {
//             return 2025 - this.birthYear;
//         },

//         getSummary: function () {
//             return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'not'} a driver's license`;
//         }
//     };

//     console.log(jonas.calcAge());
//     // console.log(jonas['calcAge'](jonas.birthYear));

//     //Challenge
//     // "Jonas is a 31-year old teacher, and he has a driver's license"
//     console.log(`${jonas.getSummary()}`);

    // Challenge #3

    /*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height 
(Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). 
Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. 
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function (){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function (){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// const markBMI = mark.calcBMI();
// const johnBMI = john.calcBMI();

// if (markBMI > johnBMI) {
//     console.log(`${mark.fullName}'s BMI (${markBMI.toFixed(1)}) is higher than ${john.fullName}'s (${johnBMI.toFixed(1)})!`);
// } else {
//     console.log(`${john.fullName}'s BMI (${johnBMI.toFixed(1)}) is higher than ${mark.fullName}'s (${markBMI.toFixed(1)})!`);
// };

// console.log(markBMI > johnBMI ? `${mark.fullName}'s BMI (${markBMI.toFixed(1)}) is higher than ${john.fullName}'s (${johnBMI.toFixed(1)})!` : `${john.fullName}'s BMI (${johnBMI.toFixed(1)}) is higher than ${mark.fullName}'s (${markBMI.toFixed(1)})!`);

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for (let i = 1; i <= 10; i++) {
//     console.log(`Lifting weights repetition ${i}`);
// }


// const jonasArray = [
//     'jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['michael'],
//     true
// ];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//     console.log(jonasArray[i], typeof jonasArray[i]);    

//     types[i] = typeof jonasArray[i];
//     types.push(typeof jonasArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let index = 0; index < years.length; index++) {
//     ages.push(2025 - years[index]);    
// }

// console.log(ages);

// // continue and break
// console.log('---ONLY STRINGS---');
// for (let index = 0; index < jonasArray.length; index++) {
//     if (typeof jonasArray[index] !== 'string') continue ;
//         console.log(jonasArray[index], typeof jonasArray[index]);
//     }    

// console.log('---BREAK WITH NUMBER---');
// for (let index = 0; index < jonasArray.length; index++) {
//     if (typeof jonasArray[index] === 'number') break ;
//         console.log(jonasArray[index], typeof jonasArray[index]);
//     }

// const jonasArray = [
//     'jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//     console.log(i, jonasArray[i]);
// }


// for (let exercise = 1; exercise <= 4; exercise++) {
//     console.log(`---- Starting exercise ${exercise} ----`);
    
//     for (let repetition = 1; repetition < 6; repetition++) {
//         console.log(`Lifting weights repetition ${repetition} 🏋️‍♂️`);
//     }
// }

// for (let index = 1; index <= 10; index++) {
//     console.log(`lifting weights repetition ${index}`);
// };


// let repetition = 1;
// while (repetition <= 10) {
//     console.log(`WHILE: lifting weights repetition ${repetition}`);
//     repetition++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolle a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6 ) {
//         console.log(`You got a ${dice}! Loop is over`);
//     }
// }

// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = (arr) => {
//     let sum = 0;
//     for (let index = 0; index < arr.length; index++) {
//         sum += arr[index];
//     }
//     return sum / arr.length;
//     };

// console.log(calcAverage(totals));


