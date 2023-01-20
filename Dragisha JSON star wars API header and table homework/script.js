// Create a button When the button is clicked, call the StarWars api for the first person.
// Print the person name in an h1 tag.
// Print the person stats in a table:
// Height
// Birth year
// Eye color
// Hair color
// URL: https://swapi.dev/api/people/1

let starWarsBtn = document.getElementById('swBtn');

starWarsBtn.addEventListener('click', function() {
    fetch('https://swapi.dev/api/people/1')
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            starWarsAPI(data);
        })
        .catch (function(err) {
            console.log('There is an error:', err);
        })
});


function starWarsAPI(data) {
    console.log(data);
    
    let properties = ['Height', 'Birth Year', 'Eye Color', 'Hair Color'];

    let personName = document.createElement('h1');
    let container1 = document.getElementById('container1');
    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');
    let tableRow1 = document.createElement('tr');
    let tableRow2 = document.createElement('tr');
    
    table.style.borderCollapse = 'collapse';
    container1.appendChild(personName);
    container1.appendChild(table);
    table.appendChild(tableBody);
    tableBody.appendChild(tableRow1);
    tableBody.appendChild(tableRow2);

    personName.innerText = data.name;

    for (let property of properties) {
        let tableHeader = document.createElement('th');
        tableHeader.innerText = property;
        tableHeader.style.border = '1px solid black';
        tableHeader.style.padding = '5px';
        tableRow1.appendChild(tableHeader);
    }

    let height = data.height;
    let birthYear = data.birth_year;
    let eyeColor = data.eye_color;
    let hairColor = data.hair_color;

    let propertyValues = [height, birthYear, eyeColor, hairColor];

    for (let value of propertyValues) {
        let tableCell = document.createElement('td');
        tableCell.innerText = value.charAt(0).toUpperCase() + value.slice(1);
        tableCell.style.border = '1px solid black';
        tableCell.style.padding = '5px';
        tableRow2.appendChild(tableCell);
    }
};