const password = document.getElementById("password-field");
const lockedIcon = document.getElementById("locked");


function togglePassword() {
    if(password.type == "password"){
        password.type = "text";
        lockedIcon.querySelector('img').src = "../img/lock-open-icon.png";
    }
    else{
        password.type = "password";
        lockedIcon.querySelector('img').src = "../img/lock-icon.png";
    }
}