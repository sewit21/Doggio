const BREEDS_URL = `https://dog.ceo/api/breeds/list/all`;

const select = document.querySelector('.breeds'); 

  fetch(BREEDS_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) { //all the data we get back 
    const breedsObject = data.message; 
    const breedsArray = Object .keys(breedsObject); //object is something javascript provides 
 
 for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement('option'); 
      option.value = breedsArray[i];  //whenever you do drop down you have to have option
      option.innerText = breedsArray[i]; 
      select.appendChild(option);  
    }
})
//first half we constructed a select using the information for the API
const img = document.querySelector(".dog-img");
const spinner = document.querySelector(".spinner");

 
 select.addEventListener("change", getDoggo)
   
img.addEventListener("load" , function() { //event listener is waiting till load event happen once it happens then  
   img.classList.add("show");
  spinner.classList.remove("show"); //remove the show from the spinner and then add  the image
 })


//url being passed into it function getdoggo was created - so that picture would appear once name was clicked
function getDoggo (event) {
    img.classList.remove("show"); //end spinner 
    spinner.classList.add("show"); // start spinner for emoji
  

    fetch(`https://dog.ceo/api/breed/${event.target.value}/images/random`)  //calling the api again 

     .then(function(response) { //get data function data / response 
         return response.json(); //convert response to Json
     })

     .then(function(data) { //get our data back with this data dot message now is going to be whatever my images will be
    console.log(data);
    img.src = data.message; // basically saying change the source of this image but wait until the image arrives back to me from the server
   
  })
}
