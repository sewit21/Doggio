const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";
//place url in there - Breeds is in capt because this will never change than it will get information from url  

fetch(BREEDS_URL) // get response from browser but it takes time this is also know as asynchronous part of AJAX ..once its receive we place then
//fetch return is something called a promise - basically an object that represent a future value

  .then(function(response) { //you will get some sort of response from the server - we are saying run this function whenever you get back the data from the server
   // const processingPromise = response.json(); // we then have to process this information 
    return response.json (); // place json because we know its going to come back as json .. this is going to process this response into something that we can use 
  })
  .then(function(data) { // after it process we than state then, we are going to have our function data so we placed function data. Data is whatever the server gave back to us
    //console.log(data); //see what data looks like coming back from the server// we can now access the dog picture
   
    const img = document.createElement('img'); // Everytime someone request a dog we want to append an image to it.  createelement creates a brand new IMG tag
    img.src = data.message; // setting that image tag source to whatever message I get back from the API
    img.alt = 'cute doggo'; 
    //alternative if picture doesnt show

    document.querySelector('.doggos').appendChild(img); // then IM  appending that to inside of the doggos HTML tag that I already have - this just takes that element and it just tags on to the end whatever you put in there
  })
