//Create a car object that the make model year and color
const car = {
    Year: 2008,
    Make: "Honda",
    Model: "Civic",
    color: "silver",
  
  
  //Create a function that will print out the car object
    getDetails: function() {
      return `This is a ${this.color} ${this.Year} ${this.Make} ${this.Model}.`;
    },
  };
  
  //Print out object
  console.log(car.getDetails());
  