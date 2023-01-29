let swBtn = document.getElementById('swBtn');

let properties = ['Planet Name', 'Population', 'Climate', 'Gravity'];

let container1 = document.getElementById('container1');
let table = document.createElement('table');
table.setAttribute('class', 'table');
let tableBody = document.createElement('tbody');
let categories = document.createElement('tr');
let planet1 = document.createElement('tr');
let planet2 = document.createElement('tr');
let planet3 = document.createElement('tr');
let planet4 = document.createElement('tr');
let planet5 = document.createElement('tr');
let planet6 = document.createElement('tr');
let planet7 = document.createElement('tr');
let planet8 = document.createElement('tr');
let planet9 = document.createElement('tr');
let planet10 = document.createElement('tr');

table.style.borderCollapse = 'collapse';
container1.appendChild(table);
table.appendChild(tableBody);
tableBody.appendChild(categories);
tableBody.appendChild(planet1);
tableBody.appendChild(planet2);
tableBody.appendChild(planet3);
tableBody.appendChild(planet4);
tableBody.appendChild(planet5);
tableBody.appendChild(planet6);
tableBody.appendChild(planet7);
tableBody.appendChild(planet8);
tableBody.appendChild(planet9);
tableBody.appendChild(planet10);

swBtn.addEventListener('click', () =>
    fetch('https://swapi.dev/api/planets/?page=1')
        .then(res => res.json())
        .then(data => starWarsPlanetsAPI(data))
        .catch (err => console.log('There is an error:', err)));
        

let starWarsPlanetsAPI = data => {
    swBtn.style.display = 'none';
    console.log(data);

    for (let property of properties) {
        let tableHeader = document.createElement('th');
        tableHeader.innerText = property;
        tableHeader.style.border = '1px solid black';
        tableHeader.style.padding = '5px';
        categories.appendChild(tableHeader);
    };
    
    for (let i = 0; i < 10; i++) {
        let planetNameCell = document.createElement('td');
        planetNameCell.innerText = data.results[i].name;
        planetNameCell.style.border = '1px solid black';
        planetNameCell.style.padding = '5px';
        tableBody.children[i+1].appendChild(planetNameCell);
        
        let populationCell = document.createElement('td');
        populationCell.innerText = data.results[i].population;
        populationCell.style.border = '1px solid black';
        populationCell.style.padding = '5px';
        tableBody.children[i+1].appendChild(populationCell);

        let climateCell = document.createElement('td');
        climateCell.innerText = data.results[i].climate;
        climateCell.style.border = '1px solid black';
        climateCell.style.padding = '5px';
        tableBody.children[i+1].appendChild(climateCell);

        let gravityCell = document.createElement('td');
        gravityCell.innerText = data.results[i].gravity;
        gravityCell.style.border = '1px solid black';
        gravityCell.style.padding = '5px';
        tableBody.children[i+1].appendChild(gravityCell);
    };

    // next10Btn.style.display = 'block';
};


// let next10Btn = document.createElement('button');
// next10Btn.innerText = 'NEXT 10';
// table.appendChild(next10Btn);
// next10Btn.style.display = 'none';

// next10Btn.addEventListener('click', () =>
//     fetch('https://swapi.dev/api/planets/?page=2')
//         .then(res => res.json())
//         .then(data => starWarsPlanetsAPI(data))
//         .catch (err => console.log('There is an error:', err)));