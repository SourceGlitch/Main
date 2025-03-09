let count = 100;
const numbers = [1, 10, 3, 15, 5, 6, 7, 8, 9, 2, 11, 12, 13, 14, 4];
const animal = "dog";
best_animal();

function increment_count() {
    let countElement = document.getElementById("numCount");
    let i = 1;
    while (i <= count) {     
        console.log(`Count ${i}`);
        i++;
        //countElement.innerText = `Count: ${i}`;
    }
}

function odd_numbers() {
    for (let i = 0; i < numbers.length; i++) { // start at 0, end at the last index in the array, increment by 1
        if (!(numbers[i] % 2 == 0)) {  //numbers[i] % 2 == 0
            console.log(`Odd number: ${numbers[i]}`)
        }
    }
}
//TODO:
/* Create a function that accepts a string variable as an argument called favoriteAnimal,
 * this function should return true if favoriteAnimal is equal to "dog" or false otherwise
 * -- DONE
 *
 * Next: create a check to see if favoriteAnimal is "cat", if it is, console.log "cat" - DONE
 * Next: create a check to see if favoriteAnimal is "bug" or "rat", if it is, console.log "eww" - DONE
 */
function favorite_animal(favoriteAnimal) {
    if (favoriteAnimal == animal) {
        return true;
    } else if (favoriteAnimal == "cat") {
        console.log("cat");
    } else if(favoriteAnimal == "bug" || favoriteAnimal == "rat") {
        console.log("eww");
    } else {
        return false;
    }
}

//TODO:
/* Create a function that accepts a int variable as an argument,
 * this function should check if the number given is greater than 0,
 * if it is, use a for loop to console.log each number from 0 to the given number and return the last number
 * if it is not greater than zero, console.log "enter a positive number" and return 0
 */
function number_check(number) {
    if (number > 0) {
        for (let i = 0; i <= number; i++) {
            console.log(i);
        }
        return i;
    } else {
        console.log("enter a positive number");
        return 0;
    }
}

//TODO:
/* Create a function that accepts an int variable as an argument, -DONE
 * this function should console.log every second number starting at 0 and ending at the given number
 */
function number_age (age) {
    for (let i = 0; i <= age; i += 2) {
        console.log(i);
    }
    console.log(i);
}

function best_animal() {
    let animalDict = {"pug": "brown", "pitbull": "black"};
    for (animal in animalDict) {
        let color = animalDict[animal];
        console.log(`Dog type: ${animal}, Color: ${color}`);
    }
}