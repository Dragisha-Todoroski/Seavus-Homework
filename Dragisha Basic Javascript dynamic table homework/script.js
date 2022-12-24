let button = document.getElementById('btn');

button.addEventListener('click', function() {
    let rowInput = parseInt(prompt('Input number of rows:'));
    let colInput = parseInt(prompt('Input number of columns:'));

    for (let i = 0; i < rowInput; i++) {
        let newRow = document.getElementById('table').insertRow(i);

        for (let j = 0; j < colInput; j++) {
            let newCell = newRow.insertCell(j);
            newCell.innerHTML = `Row-${i+1} Column-${j+1}`;
        };
    }
})