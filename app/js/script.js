function userSessionStorageWrite() {
    var login = document.getElementById("UserName");
    var name = document.getElementById("Name");
    var email = document.getElementById("UserEmail");
    var password = document.getElementById("UserPassword1");
    var phoneNumber = document.getElementById("UserPhone");
    sessionStorage.setItem("login", login);
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    sessionStorage.setItem("phoneNumber", phoneNumber);
    alert("Success");
    $('#content').load('templates/login.html');
}

function userSessionStorageRead(){
    var loginRead = sessionStorage.getItem("login");
    var passwordRead = sessionStorage.getItem("password");
    var inputLogin = document.getElementById("UserName");
    var inputPasword = document.getElementById("UserPassword");
    var buttonsLogin = document.getElementById("buttonsLogin");

    if (inputLogin == loginRead && inputPasword == passwordRead) {
        alert("Welcome");
        buttonsLogin.style.display="none";
        location.reload()
    }
        else {
        alert("Неверный пароль или логин")
    }
}