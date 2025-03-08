function enter(){
    showLoading();
    setTimeout(() => {
        window.location.href = "../login/index.html";
    }, 3000);
}

function togglePassword() {
    const password = document.getElementById("password-field");
    const lockedIcon = document.getElementById("locked");

    if(password.type == "password"){
        password.type = "text";
        lockedIcon.querySelector('img').src = "../img/lock-open-icon.png";
    }
    else{
        password.type = "password";
        lockedIcon.querySelector('img').src = "../img/lock-icon.png";
    }
}

function toggleConfirmPassword(){
    const confirmPassword = document.getElementById("confirm-password-field");
    const lockTwo = document.getElementById("locked-two");    

    if (confirmPassword.type == "password"){
        confirmPassword.type = "text";
        lockTwo.querySelector('img').src = '../img/lock-open-icon.png';
    }
    else{
        confirmPassword.type = "password";
        lockTwo.querySelector('img').src = '../img/lock-icon.png';
    }
}