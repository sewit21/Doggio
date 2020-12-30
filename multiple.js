
const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

function addDoggo () { 
    fetch(BREEDS_URL)  //want you to do something that will take time
    .then(function(response) {  //then you call after thats completed and come backs 
      return response.json (); //than do this other thing..this takes time - processing of the data requires the browser to go through and  a bunch of complicated parsing and such
    })
    .then(function(data) { 
      const img = document.createElement('img'); 
      img.src = data.message; 
      img.alt = 'cute doggo'; 
  
      document.querySelector('.doggos').appendChild(img); 
    })  
}

document.querySelector('.add-doggo').addEventListener('click', addDoggo);  // whenever someone clicks (named as addDoggos)