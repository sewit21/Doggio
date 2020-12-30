const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
  //show spin//
  const select = document.querySelector('.breeds');

  fetch(BREEDS_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) { //console.log(data); -real formula - this whole thing makes a select down
    //console.log(data);
    const breedsObject = data.message; //object something that javascript made for u . other things object can do 
    const breedsArray = Object .keys(breedsObject);
    //console.log(object.keys(data.message)); //makes data into array
    //breedsArray push('harvanese'); to add on to the array just add this and name of option

    for (let i = 0; i < breedsArray.length; i++) {

      //now we want to create an option inside of the select so we :
      const option = document.createElement('option'); // creating option value in dom 
      option.value = breedsArray[i];  //if you doing select down you have to have an option because thats what is going to be selected
      option.innerText = breedsArray[i]; // now we have an option thats ready to be inserted into our application
     select.appendChild(option);  //to insert array/data in application
    }
  })

//value is in select box now if if someone clicks the name we want an image to  appear so we are  going to create  select and add a listener to respond to whats was clicked

  
select.addEventListener("change", function(event) {//when a person clicks a name you want 

let url =`https://dog.ceo/api/breed/${event.target.value}/images/random` //event target value is what the person selected   construct our url to go into the dog api to get a random image
//place backtick for template  string - we are grabing the correct/random image from here 

getDoggo (url); //this construct that url into get  doggos //pass that url into get doggos

})
 
const img = document.querySelector('.dog-img-show');
const spinner = document.querySelector('.spinner');

function getDoggo(url) { //get image from url 
     
      img.classList.remove("show"); //remove previous image 
      spinner.classList.add("show");  //show the spinner once some click on something 

    fetch(url)
    .then(function(response) {
      return response.json();
    })   

      .then(function(data) {// data. message will be whatever image i clicked on  / 
      img.src = data.message; //this states cool you  can change  the image but wait till the it get back to me from the server  
      
   
 });
  }

img.addEventListener("load", function () { //wait in till that load (image successfully load its source //event happens once that happen then 
  spinner.classList.remove("show"); //remove spinner
   img.classList.add("show"); //add the new image
})
