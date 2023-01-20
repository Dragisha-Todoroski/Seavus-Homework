let movies = ['harry potter', 'shawshank redemption', 'the lord of the rings', 'forrest gump'];

let movieBtn = document.getElementById('searchMovie');
let movieInput = document.getElementById('movie');
let resultHeader = document.getElementById('result2');

movieBtn.addEventListener('click', function() {
    resultHeader.innerText = '';
    if (movies.includes(movieInput.value.toLowerCase())) {
        let movieExist = document.createElement('h1');
        movieExist.innerText = 'The movie can be rented';
        movieExist.style.color = 'green';
        resultHeader.appendChild(movieExist);
    }
    else if (movieInput.value === '') {
    }
    else {
        let movieExist = document.createElement('h1');
        movieExist.innerText = 'The movie can\'t be rented';
        movieExist.style.color = 'red';
        resultHeader.appendChild(movieExist);
    }
    movieInput.value = '';
});



// втора верзија со индикатор flag

// let movies = ['harry potter', 'shawshank redemption', 'the lord of the rings', 'forrest gump'];

// let movieBtn = document.getElementById('searchMovie');
// let movieInput = document.getElementById('movie');
// let resultHeader = document.getElementById('result2');

// movieBtn.addEventListener('click', function() {
//     let flag = 0;
//     resultHeader.innerText = '';
//     for (let movie of movies) {
//         if (movieInput.value.toLowerCase() === movie) {
//             let movieExist = document.createElement('h1');
//             movieExist.innerText = 'The movie can be rented';
//             movieExist.style.color = 'green';
//             resultHeader.appendChild(movieExist);
//             flag++;
//             break;
//         }
//     };
//     if (movieInput.value === '') {
//     }
//     else if (flag === 0) {
//             let movieExist = document.createElement('h1');
//             movieExist.innerText = 'The movie can\'t be rented';
//             movieExist.style.color = 'red';
//             resultHeader.appendChild(movieExist);
//     }
//     movieInput.value = '';
// });