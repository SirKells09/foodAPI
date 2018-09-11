const baseURL = 'https://api.edamam.com/search'; //1
const key = '2ac35a5151675a74b7e096299e1fda78';
const appId = '6490b8f2'
let url;


const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

// const recipe = document.getElementById('recipe').value;
let pageNumber = 0;
// console.log('PageNumber: ', pageNumber);
let displayNav = false;
//RESULTS SECTION
const section = document.querySelector('.results');
searchForm.addEventListener('submit', fetchResults);
// nextBtn.addEventListener('click', nextPage);
// previousBtn.addEventListener('click', previousPage);
nav.style.display = 'none';

function fetchResults(e) {
    e.preventDefault();
    console.log(e);

    url = `${baseURL}?q=${searchTerm.value}&app_id=${appId}&app_key=${key}`;
console.log(url);
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            displayResults(json);
            console.log(json);
        })
        .catch(function(e) {
           console.log("wrong");
        })
      

        
    }
     function displayResults(json) {
         cosole.log("Display Results", json);
     }
//  recipe = json.result.docs;
//  if (articles.length === 10){
//     nav.style.display = 'block';
// } else {
//     nav.style.display= 'none';
// }
// console.log(json);