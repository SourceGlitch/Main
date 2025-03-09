let nightModeElement = document.getElementById("nightMode");
let element = document.body;
let changeAgeId = document.getElementById('changeAge');
    nightModeElement.addEventListener('click', function() {
            element.classList.toggle("night-mode");
        });

function main() {
    change_age();
}       

function change_age() {
    const submitAgeId = document.getElementById('submitAge');
    submitAgeId.addEventListener('click', function() {
        age = changeAgeId.value;
        console.log(age);
    })
}

main();

