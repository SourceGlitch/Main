loginBtn = document.getElementById("loginBtn");
userField = document.getElementById("username");
passField = document.getElementById("password");
let username = "john"
let password = "doe"

function main () {
    init_login_button();
    return
}

/* NOTE: In regards to these functions(and coding in general) a return value of 0 is typically used to indicate success,
 * so if a function RETURNS 0, it means the function ran as a success, if it returns 1, it means it ran as a failure
 */

/* TODO: Create a function called init_login_button that sets an on click listener for a button called "loginBtn"
 * when this button is clicked, a function should be called: check_user_and_password_field
 * if the check_user_and_password function returns 0, navigate to the index.js page
 * otherwise if the check_user_and_password function returns 1, display a message saying "Incorrect username or password, Try again"
 * 
 * TASKS:
 * - create the function definition - DONE
 * - create the button element in the login.html page - DONE
 * - create two text fields in the login.html page - DONE
 * - create a variable to store the "loginBtn" element from the html page - DONE
 * - set an on click listener for the button - DONE
 * - implement the logic based on the description for a click on the login button - DONE
 * - create global variables to store the username and password text fields from login.html - DONE
 * - get the value from the username and password fields when the button is clicked - DONE
 * - pass these values to the check_user_and_password function - DONE
 */
 function init_login_button() {
    loginBtn.addEventListener('click', function(){
        let user = userField.value;
        let pass = passField.value;
        if (check_user_and_password_field(user, pass) === 0) { //checks if the check_user_and_password function returns 0(returns success)
            window.location.href = "homepage.html"
        } else { //checks if the check_user_and_password function returns 1(returns failure)
       alert("Incorrect username or password, Try again");
        }
    })
     }



 
/* TODO: Create a function called check_user_and_password_field that ensures both of the input fields are not blank
 * The logic is as follows:
 * if the userName field is blank, display a message saying "Please enter a username"
 * if the password field is blank, display a message saying "Please enter a password"
 * if both of the fields are not blank call a function called validate_username_and_password
 * if the validate_username_and_password function returns 0, return 0 from the check_user_and_password function
 * otherwise, return 1
 * 
 * TASKS:
 * - create the function definition - DONE
 * - add the arguments for the username and password - DONE
 * - check if the username and password are blank using and if, else if, else statement - DONE
 * - call the validate_username_and_password if both fields are not blank - DONE
 * - return 0, or 1, based on the result of validate_username_and_password - DONE
 */

function check_user_and_password_field(user, pass) {
    if (user == "" || user == null) {
        alert("Please enter a username");
    } else if (pass == "" || pass == null) {
        alert("Please enter a password");
    } else {
        return validate_username_and_password(user, pass);
    }
}

/* TODO: Create a function called validate_username_and_password that checks if the given username and password are the same
 * as the global "username" and "password" variables.
 * if the username and password are the same as the global variables, return 0, otherwise return 1
 * 
 * TASKS:
 * - create the function definition
 * - create two global variables, "username" and "password", set these to whatever you want the correct login username and password to be - DONE
 * - add two arguments to the function corresponding to the username and password that need to be checked - DONE
 * - implement the logic for checking if the username and password are correct or not - DONE
 * - if the username AND password are correct return 0, otherwise return 1 - DONE
 */

function validate_username_and_password(user, pass) {
    if (user == username && pass == password) {
       // Log user to Firebase
       // firebase.database().ref('users').push({
         //  username: user,
         //  loginTime: new Date().toString()
     //   });
        return 0;
    } else {
        return 1;
    }
}

function redirect_to_login() {
    window.location.href = "login.html"
}

main();