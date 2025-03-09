let formBtn = document.getElementById('formBtn');
let customUserName = document.getElementById('customUserName');
let customPassWord = document.getElementById('customPassWord');
let createdU = "john"
let createdP = "doe"

sign_up_page_btn();
check_sign_up();

function sign_up_page_btn(){
    let createdUserName = customUserName.value;
    let createdPassWord = customPassWord.value;
    formBtn.addEventListener('click', function() {
        if (check_sign_up(createdUserName, createdPassWord === 0)) {
            window.location.href = 'login.html';
        } else {
            alert('Enter Username and Password');
        }   
    })
}

function check_sign_up(createdUserName, createdPassWord) {
    if (createdUserName == '' || createdUserName == null) {
        alert('Enter Username');
    } else if (createdPassWord == '' || createdPassWord == null) {
        alert('Enter Password');
    }   else {
        console.log(validate_sign_up(createdUserName, createdPassWord));
    }
}

function validate_sign_up(createdUserName, createdPassWord) {
    if (createdU == createdUserName && createdP == createdPassWord) {
        return  1;
    } else {
        return 0;
    }
}