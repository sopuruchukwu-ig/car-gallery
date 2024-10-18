//store all cars globally fo filtering
let allCars = []

//define an asynchronous function car data ffrom a json file
const fetchCarData = async () => {
    try{
        //fetch the json file containing car data
   const response = await fetch('cars.json')// await pauses the execution of a function until the promise is settled
   // parse the json response into a javascript objet
      const data = await response.json()
   
   // store the array of cars in the global variable "all cars" for future filtering
      allCars = data.cars

      //innitially display all cars whe the page reload
      displayCars(allCars)

// handle any error that occur during the fetch process
    } catch (error) {
        //log the error messgae to the console
        console.error('Error fetching car data:', error)
    }
    
}

// define a function to display the carcard on the webpage
const displayCars = (cars)  => {
   const comtainer = document.getElementById('carContainer')

   //clear existimg content inside the car container
   carContainer.innerHTML = '';

   //loop through each car object in the  'cars' array.
   cars.forEach((car) => {

   // creats a new <div> element for each carcard
   const carCard = document.createElement('div')

   //add a css class 'card' to the <div> for styling purpose. 
   carCard.classList.add('card')

   //add html CONTENT to the car card, ncluding an image , name , and model of car.
   
   carCard.innerHTML = `
   <img src="${car.image}" alt="${car.name} ${car.model}" width="300" >
   <h2>${car.name}</h2>
   <p>Model: ${car.model}</p>
   `
  // append the car card to the car container on thr webpage
  carContainer.appendChild(carCard)
   })
}
//fetch and display car data when the page loads
window.onload = fetchCarData