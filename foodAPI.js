const baseURL = 'https://api.edamam.com/search'; //1
const key = '2ac35a5151675a74b7e096299e1fda78';
const appId = '6490b8f2'
let url;


const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
//RESULTS NAVIGATION
const nav = document.querySelector('nav');
// console.log('PageNumber: ', pageNumber)
//RESULTS SECTION
const section = document.querySelector('section');
searchForm.addEventListener('submit', fetchResults);
// nextBtn.addEventListener('click', json.from);
// previousBtn.addEventListener('click', json.to);




function fetchResults(e) {
    e.preventDefault();
    console.log(e);
    url = `${baseURL}?q=${searchTerm.value}&app_id=${appId}&app_key=${key}`;
    console.log(url);
     fetch(url)  // promise
    .then(function(result) {
        return result.json();
    })
    .then(function(json) {
            displayResults(json);
            console.log(json);
        })
    }
    
    function displayResults(json){
        while(section.firstChild){ // ask what this means
        section.removeChild(section.firstChild);
       }
       let recipes = json.hits;
console.log(recipes);



if(recipes.length === 0){
    console.log("No results");
}  else {
for(let i = 0; i < recipes.length; i++){
    console.log(i);
       let recipe= document.createElement('section');
       let link = document.createElement('a');
       let img = document.createElement('img');
       let para= document.createElement('h2');
       let clearfix = document.createElement('div');
       let calCount = document.createElement('p')
       let current = recipes;
        link.href = current[i].recipe.url;
        link.textContent = current[i].recipe.label;
        para.textContent = current[i].recipe.healthLabels;
        img.src= current[i].recipe.image;
        calCount.textContent =`CALORIES:" ${current[i].recipe.calories}`;

    
// appending
    clearfix.setAttribute('class', 'clearfix');
    section.appendChild(recipe);
    para.appendChild(link);
       section.appendChild(link);
       section.appendChild(para);
       section.appendChild(calCount);
       section.appendChild(img);
       section.appendChild(clearfix);
    }
   
}
}


window.onload = function () {
    // Array of Images
     var backgroundImg=["./assets/corndogBackdrop.jpg" ,
     "./assets/burgerAndFries.jpg",
     "./assets/fries.jpg",
     "./assets/m&ms.jpg" ,
     "./assets/twoBurgersTatts.jpg",
                       ]

       setInterval(changeImage, 2000);
      function changeImage() {   
       var i = Math.floor((Math.random() * 6));

       document.body.style.backgroundImage = "url('"+backgroundImg[i]+"')";

     }
   }