let swBtn = document.getElementById('swBtn');

let properties = ['Planet Name', 'Population', 'Climate', 'Gravity'];

let container1 = document.getElementById('container1');

let getData = url => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        starWarsPlanetsAPI(data)
    })
    .catch (err => console.log('There is an error:', err));}

swBtn.addEventListener('click', () => {
    getData('https://swapi.dev/api/planets/?page=1')
});
        

let starWarsPlanetsAPI = data => {
    tableDiv.innerHTML = '';
    swBtn.style.display = 'none';

    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');
    let categories = document.createElement('tr');

    table.style.borderCollapse = 'collapse';
    tableDiv.appendChild(table);
    table.appendChild(tableBody);
    tableBody.appendChild(categories);

    for (let i = 0; i < 10; i++) {
        let tableRow = document.createElement('tr');
        tableBody.appendChild(tableRow)[i];
    };

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

    container1.appendChild(next10Btn);
};

let next10Btn = document.createElement('button');
next10Btn.innerText = 'NEXT 10';

let previous10Btn = document.createElement('button');
previous10Btn.innerText = 'PREVIOUS 10';

next10Btn.addEventListener('click', () => {
    getData('https://swapi.dev/api/planets/?page=2');
    next10Btn.style.display = 'none';
    container1.appendChild(previous10Btn);
    previous10Btn.style.display = 'block';
});

previous10Btn.addEventListener('click', () => {
    getData('https://swapi.dev/api/planets/?page=1');
    previous10Btn.style.display = 'none';
    next10Btn.style.display = 'block';
});
