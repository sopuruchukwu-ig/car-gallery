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

      generateFilterButttons(allCars)

// handle any error that occur during the fetch process
    }catch(error){
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

// define a fucntion to dynamcally creat filter button 
const generateFilterButttons = (cars) => {
    // get the HTML element where the filter buttons will be places 
    const filterButtonsContainer = document.getElementById('filterButtons')

    // use Map() to create an array of all car names 
    const uniqueNames = [...new Set(cars.map((car) => car.name))];
    // USE set to remove duplicate and filter buttons will be placed 

    // loop through the array of unique cars names 
    uniqueNames.forEach((name) => {
        // creat a new '<button>' element or each unique car name
        const button = document.createElement('button')
    //  sret the text of the button to the crs nsme
        button.textContent = name

        button.addEventListener('click', () => filterCarsByName(name))

        filterButtonsContainer.appendChild(button)
    })
}

const filterCarsByName = (name) => {
    const filteredcars = allCars.filter((car) => car.name === name)

    displayCars(filteredcars)
}
//fetch and display car data when the page loads
window.onload = fetchCarData