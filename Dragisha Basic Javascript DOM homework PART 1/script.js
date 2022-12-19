// HOMEWORK PART 1
// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

let header1First = document.querySelector('#myTitle');
header1First.innerText = 'This used to be a different main heading'

let firstParagraph = document.getElementsByClassName('paragraph')[0];
firstParagraph.innerText = 'I have actually changed the text in this paragraph!!!';

let secondParagraph = document.getElementsByClassName('second')[0];
secondParagraph.innerText = 'I changed this, too...';

let header1Final = document.querySelectorAll('h1')[1];
header1Final.innerText = 'Nothing to see here :)';

let header3 = header1Final.nextElementSibling;
header3.innerText = 'Ok, bye-bye!';

document.write('<br></br>');


// HOMEWORK PART 2
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

let numArray = [1, 2, 3, 4, 5];
let sum = 0;

let numList = document.querySelector('#numList');
for (let num of numArray) {
    numList.innerHTML += `<li>${num}</li>`
    sum += num;
}

document.write(`${sum}<br><br>${numArray.join(' + ')} = ${sum}`);

// За она што треба да го ставиме во нов HTML page, не сакам да чепкам да не згрешам и не можам да се вратам.
// Креирав втор HTML file и го поврзав за истиов js file, но така двата имаа проблеми. Дел од кодов не работи на едниот HTML file бидејќи не се наоѓа тоа што треба, а истото и за вториот. 
// Пример, за првава домашна, ако ја врзам скриптава за првиот HTML file, кодот од вторава домашна ќе ми дава error бидејќи не е користена во HTML file-от. Исто и за втората. Ако скриптава ја врзам и за вториот HTML file, бидејќи кодот од првата домашна не е релевантен во тој HTML file (воопшто го нема!), ми дава error (а поради тоа, не ни стигнува ни до втората домашна!)