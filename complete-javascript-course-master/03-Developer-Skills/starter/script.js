// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2025 - birthYear;

// console.log(calcAge(1994));

//Problem 1

// const tempreture = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is tempreture amplitude? Answer: difference between highest and lowest tempreture
// - How to compute max and min tempreture?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in tempreture array
// - Find min value in tempreture array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = tempreture => {
//   let max = tempreture[0];
//   let min = tempreture[0];

//   for (let index = 0; index < tempreture.length; index++) {
//     const currentTemp = tempreture[index];

//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) max = tempreture[index];
//     if (currentTemp < min) min = tempreture[index];
//   }

//   return max - min;
// };
// const amplitude = calcTempAmplitude(tempreture);
// console.log('Amplitude 1:', amplitude);

//Problem 2
// Function should now receive 2 arrays of tempretures

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? No! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const calcTempAmplitudeNew = (t1, t2) => {
//   const tempreture = t1.concat(t2);

//   let max = tempreture[0];
//   let min = tempreture[0];

//   for (let index = 0; index < tempreture.length; index++) {
//     const currentTemp = tempreture[index];

//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) max = tempreture[index];
//     if (currentTemp < min) min = tempreture[index];
//   }

//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log('Amplitude 2:', amplitudeNew);

// Debugging

// const measureKelvin = () => {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
// C) Fix bug
// value: Number(prompt('Degrees celsius:')),
//   };
// B) Find bug ( value is a string not a number)
//   console.log(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// A) Identify bug
// console.log(measureKelvin());

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures.
Example: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above
to the console.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test data 1 : [17, 21, 23]
Test data 2 : [12, 5, -5, 0, 4]

GOOD LUCK 😀
*/

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the x days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with °C
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = arr => {
//   let day;
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     i === 0 ? (day = 'day') : (day = 'days');
//     str = str + `${arr[i]}°C in ${i + 1} ${day} ... `;
//   }
//   console.log(`... ${str}`);
// };
// printForecast(data1);
// printForecast(data2);

// Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

/*
// Written by ChatGPT
function analyzeWorkWeek(dailyHours) {
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // Validate that the input array has exactly 7 elements
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    throw new Error('Input must be an array of exactly 7 daily work hours.');
  }

  // Calculate total hours worked
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

  // Calculate average daily hours, rounded to one decimal place
  const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

  // Find the day with the most hours worked
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const maxDay = daysOfWeek[maxDayIndex]; // Convert index to day name

  // Count the number of days worked
  const daysWorked = dailyHours.filter(hours => hours > 0).length;

  // Check if the week was full-time (35 hours or more)
  const isFullTime = totalHours >= 35;

  // Return the result object
  return {
    totalHours,
    averageHours,
    maxDay, // The name of the day with the most hours
    daysWorked,
    isFullTime,
  };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 5, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log(analysis);

const weeklyHours2 = [7.5, 8, 6.5, 0, 8.5];
const analysis2 = analyzeWorkWeek(weeklyHours2);
console.log(analysis2);
*/
