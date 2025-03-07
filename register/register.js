function logout(){
    showLoading();
    setTimeout(() => {
        window.location.href = "../login/index.html";
    }, 3000);
}