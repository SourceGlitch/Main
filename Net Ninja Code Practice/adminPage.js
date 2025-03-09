function main () {
    let userLogins = getUserLogins();
    print_user_logins(userLogins)
    return;
}

function getUserLogins() {
    const urlParams = new URLSearchParams(window.location.search);
    const userLoginsParam = urlParams.get("userLogins");
    try {
        if (userLoginsParam != null && userLoginsParam !== '' ) {
            let userLogins = JSON.parse(decodeURIComponent(userLoginsParam));
             return userLogins;
         } else {
             return {};
         }

    } catch (error) {
        console.error(`Error parsing userLogins parameters`, error);
    }
    return {};
}

function print_user_logins(userLoginsDict) {
    for (username in userLoginsDict) {
        let password = userLoginsDict[username];
        console.log(`Username: ${username}, Password: ${password}`);
    }
}

function getUserLogins() {
    const urlParams = new URLSearchParams(window.location.search);
    const userLoginsParam = urlParams.get("userLogins");
    try {
        if (userLoginsParam != null && userLoginsParam !== '' ) {
            let userLogins = JSON.parse(decodeURIComponent(userLoginsParam));
             return userLogins;
         } else {
             return {};
         }

    } catch (error) {
        console.error(`Error parsing userLogins parameters`, error);
    }
    return {};
}

function print_user_logins(userLoginsDict) {
    for (username in userLoginsDict) {
        let password = userLoginsDict[username];
        console.log(`Username: ${username}, Password: ${password}`);
    }
}

main();