
// opens into a new webpage after login information is aquired.
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

    const userName = document.getElementById("userName").value;

    fetch ('/log-login', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ username: userName })
    })
    .then(response => {
        if (response.ok) {
            window.location.href = "welcome.html?username=" + encodeURIComponent(userName);
        } else {
            console.error("Failed to log the login.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
});
