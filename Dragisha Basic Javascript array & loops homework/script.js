// HOMEWORK #1
// Create a function called tellStory()
// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments
// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
// The value that is returned from the function should be printed in the console or in alert


// Еден начин
function tellstory() {
    let story = ['Radmila', 'excited', 'grade my homework'];
    console.log(`This is ${story[0]}. ${story[0]} is the assistant for our class and she is very ${story[1]} to ${story[2]}. I hope it's good!`);
}

tellstory();

console.log('\n\n');

// Друг начин
function story(name, mood, activity) {
    console.log(`This is ${name}. ${name} is the assistant for our class and she is very ${mood} to ${activity}. I hope it's good!`);
}

story('Radmila', 'excited', 'grade my homework');

console.log('\n\n');


// HOMEWORK #2
// Write a function that will take an array of 5 numbers as an argument and return the sum.

// Print it in the console or in alert

// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.

let sumArray = [1, 2, 3, 4, 5];
function sumOfNumbers(array) {
    let sum = array.reduce((initialSum, a) => initialSum + a, 0);
    return sum;
}

let validateArray = [2, NaN, 7, 4, 13, 3, undefined, null, 202];

function validateNumber(array) {
    for (let element of array) {
        
        if(typeof element !== 'number' || Number.isNaN(element) || element > 6) {
            console.log('ERROR - NOT A NUMBER!');
        }
        else {
            console.log(element);
        }
    }
}

console.log(`The sum of numbers is ${sumOfNumbers(sumArray)}`);

console.log('\n');

validateNumber(validateArray);

console.log('\n\n');


// HOMEWORK #3
// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"

let saying = ['Repetitio', 'est' , 'mater', 'studiorum...'];

function repetitioSentence(array) {
    let sentence = array.join(' ');
    return sentence;
}
console.log(repetitioSentence(saying));

console.log('\n\n');


// HOMEWORK #4
// Title: Looping structures

// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.

// let line = '';

for(let num = 1; num <= 19; num++) {
    
    // if(num % 2 === 0) {
    //     line += num + '\n';
    // }    
    // else {
    //     line += num + ' ';
    // }
    console.log(num, ++num); // може  и другата верзија во коментарите, само ќе треба таму условот да ни е num < = 20, ама ова e пократко
}

// console.log(line);

console.log('\n\n');


// HOMEWORK #5
// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it


let itemArray = [3, 5, null, 6, NaN, '', 8, 'dog', 11];

function minMaxSumCalculate(array) {
    min = Infinity;
    max = -Infinity;
    
    for (let num of array) {
        if (num === null || num === 0 || num === '' || num === false || num === undefined || Number.isNaN(num)) {
            continue;
        }

        if(num < min) {
            min = num;
        }
        if(num > max) {
            max = num;
        }
    }

    return `The sum of the MAX(${max}) and MIN(${min}) numbers from the chosen array is ${max + min}`;
}

console.log(minMaxSumCalculate(itemArray));

console.log('\n\n');


// HOMEWORK #6
// Title: Looping structures

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

let firstNames = ['Dimitar', 'Hristina', 'Ivan'];
let lastNames = ['Bogdanov', 'Bozhinova', 'Arsovski'];

let fullNamesArray = [];

function fullNames(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        fullNamesArray.push(`${i+1}. ${arr1[i]} ${arr2[i]}`);
    }
    
    console.log(fullNamesArray);
}

fullNames(firstNames, lastNames);

