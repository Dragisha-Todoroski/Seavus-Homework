// HOMEWORK 1 - Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

function typeReturn(parameterType) {
    console.log(typeof parameterType);
}

typeReturn(['firstname', 'middlename', 'lastname']);
typeReturn(5 === 5);
typeReturn(5);
typeReturn('hungry');
typeReturn();

console.log('\n');


// HOMEWORK PART 2 - Write a JavaScript function that will return: Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years - Note: Call the function in console to see answer - Bonus: Make the same function work for converting dog to human years as well

// function humanToDog(ageParameter) {
//     let result = ageParameter * 7;
//     return result;
// }

// function dogToHuman(ageParameter) {
//     let result = ageParameter / 7;
//     return result;
// }

// let choice = prompt('Enter \'human\' for human to dog years, and \'dog\' for the opposite:');
// let numberChoice = parseInt(prompt('Enter value:'));

// if(choice === 'human' && !Number.isNaN(numberChoice)) {
//     console.log(`${numberChoice} human years is the equivalent of ${humanToDog(numberChoice)} in dog years!`);
// }
// else if(choice === 'dog' && !Number.isNaN(numberChoice)) {
//     console.log(`${numberChoice} dog years is the equivalent of ${dogToHuman(numberChoice)} in human years!`);
// }
// else {
//     console.log('Wrong answer! I am sad now. Bye bye. :(');
// }
// console.log('\n');

// HOMEWORK PART 2.5 - не знам кој е најдобар начин да се направи конверзијата во една функција наместо две, особено ако одиме преку prompts и IFs. Направив верзија кадешто двете ги прави одеднаш со calling function. Знам има една варијанта каде правиме нова варијалба чија вредност би била или humanToDog или dogToHuman, и преку IFs ќе дознаеме која е одбрана за да се конзологира вредноста на истата. Но, таму humanAge или dogAge мора да биде 0, за да се испечати само едното. Ако сакаме humanToDog, dogAge ќе биде 0, и обратно. Ни на овој начин не користиме prompts.

// function calculation(humanAge, dogAge) {
//     let humanToDog = humanAge * 7;
//     let dogToHuman = dogAge / 7;
//     console.log(`Dog would be ${humanToDog} years old.\nHuman would be ${dogToHuman} years old.`)
// }

// calculation(5, 49);

// console.log('\n');

// HOMEWORK PART 3 - Write a javascript function for an ATM: The ATM should give cash - Should return "Not enough money" if you request more money - Should return the ammount withdrawn and money left on the account if you have enough - Note: Hardcode your account money in the program - Bonus: Make it work with prompt()!

// let balance = 1000;

// function atm() {
//     let withdraw = parseInt(prompt('Enter how much you wish to withdraw:'));
//     if(withdraw > balance) {
//         console.log('Not enough money!');
//     }
//     else if(withdraw <= balance) {
//         console.log(`You withdrew $${withdraw}. There is $${balance - withdraw} left on your account.`);
//     }

//     return withdraw;
// }

// atm();