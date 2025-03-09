let fullName;
let age;
let numTries = 3;
let userLogins = {};
let promptElement = document.getElementById("name_and_age_text");


//Log in to admin Page
let usernameElement = document.getElementById("adminUsername");
let passwordElement = document.getElementById("secretPassword");
let submitButton = document.getElementById("submitButton");
let riddleButton = document.getElementById("riddle");
let userInfo = document.getElementById("userInfo");
const adminUsername = "admin";
const adminPassword = "const";
const minimumAge = 18;

function main() {
    fullName = promptFullName(); //Stores User input from the promptFullName() into the fullName varible
    age = promptAge(); //Stores User input from the prompAge() into the age Varible
    get_username_and_password();
    hide_Login_Elements();
    login_solve();
}

function promptFullName() { //Creates a prompt for User to input Name
    let fullName = prompt("What is your name?");
    while (fullName == false) { // checking if the user entered a name
        numTries--; //numTries subtracted by one
        if (numTries > 0) { // if number of numTries is less than 0
            fullName = prompt(`You didn't enter your name. You have ${numTries} tries left. Please try again. What is your name?`);
        } else { //run out of numTries
            alert('You have used all of your tries.');
            return null;
        }
    }
    return fullName;
}

function promptAge() {
    let age = prompt(`What is your age?`);
    while (age == false) { // checking if the user entered an age
        numTries--;
        if (numTries > 0) {
            age = prompt(`What is your age? You have ${numTries} tries left. `);
        } else {
            alert('You have run out of tries.');
            return null;
        }
    }
    return age;
}

function checkAgeRequirement(age) {
    if (age >= minimumAge) { //if age greater than the minimumAge 
        console.log("Age meets requirement");
        return true;
    } else { //if age is less than the minimumAge
        console.log("Age does not meet requirement.");
        return false;
    }
}

function hide_prompt_element() {
    promptElement.style.display = "none";
}

function shown_prompt_element() {
    promptElement.style.display = "block"
}

function displayNameAndAge() {
    if (promptElement) {
        promptElement.innerText = `Your Name is: ${fullName}\n Your Age is: ${age}`;
    } else {
        console.error("Element with id 'name_and_age_text' not found.");
    }
}

function get_username_and_password() {
    submitButton.addEventListener('click', function() { //give the button element and onclick function
        let enteredUsername = usernameElement.value;
        let enteredPassword = passwordElement.value;
        if (!(enteredUsername == "" && enteredPassword == "")) {
            let isUsernameGood = checkUsername(enteredUsername);
            let isPasswordGood = checkPassword(enteredPassword);
            if (isUsernameGood && isPasswordGood) {
                if (age != null && checkAgeRequirement(age)) {
                    try {
                        userLogins[enteredUsername] = enteredPassword;
                        open_admin_window();
                    } catch (error) {
                        console.error(`Error adding user login to dictionary:`, error)
                    }
                    return;
                } else {
                    alert("You must be 18 years old to access the admin page.");
                }
            } else {
                alert("Username or password incorrect")
            }
        } else if (!isUsernameGood) {
            alert("Incorrect Username");
        } else if (!isPasswordGood) {
            alert("Incorrect Password");
        } else {
            alert("Username and Password required");
        }
    });

function checkUsername(givenUsername) {
    if (givenUsername == adminUsername) {
        console.log("Correct Username");
        return true;
    } else {
        return false;
    }

}

function checkPassword(givenPass) {
    if (givenPass == adminPassword) {
        console.log("Correct Password");
        return true;
    } else {
        return false;
    }
}

//function updateTable() {
    // Get the table body element
   // var tableBody = document.querySelector('.table tbody');

    // Create a new row for the user login information
   // var newRow = document.createElement('tr');
   // newRow.innerHTML = `
   //   <td>${Object.keys(userLogins).length}</td>
   //   <td>${fullName}</td>
   //   <td>${age}</td>`;

    // Append the new row to the table body
  //  tableBody.appendChild(newRow);
  //}

function open_admin_window() {
    console.log("User Login:", userLogins);
    try {
        var userLoginsString = encodeURIComponent(JSON.stringify(userLogins)); // converts our dictionary of logins to a string
        window.location.href = "adminPage.html?userLogins=" + userLoginsString;
       
    } catch (error) {
        console.error(`Error converting dictionary to string`, error)
    }
}
}


function hide_Login_Elements() {
    usernameElement.style.display = "none";
     passwordElement.style.display = "none";
     submitButton.style.display = "none";
}

function show_Login_Elements() {
    usernameElement.style.display = "block";
    passwordElement.style.display = "block";
     submitButton.style.display = "block";
}


function login_solve() {
    hide_Login_Elements();
    riddleButton.addEventListener('click', function(){
        riddleUserAnswer = prompt("I am Leader in a crew, I am a Captain of a ship, I am a what of a program");
         if (riddleUserAnswer === adminUsername) {
             alert("You got my Username...");
             riddlePassAnswer = prompt("What data type keeps a Varible from changing?");
             if (riddlePassAnswer === adminPassword) {
                 alert("and my Password...Beware the knowledge you seek!");
                 show_Login_Elements();
             } else {
                 alert("Try again");
             }
     } else 
             alert("Try again");
 })
}

main();