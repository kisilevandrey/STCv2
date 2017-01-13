//$('.submit').on('click', userSessionStorageWrite);//
$('#login_button').on('click', login);
$('#register_button').on('click',register);
$('#contacts').on('click', contactPage);
$('#car').on('click', autos);
$('.submit').on('click', validateFormRegister);

function validateFormRegister() {
    if (!document.getElementById('Name').value) {
        document.getElementById('err').innerHTML = 'Заполните это поле';
        return false;
    }
    else {
        document.getElementById('err').innerHTML = "";
    }
}


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
    $('#content').load('templates/login.html');
    console.log("jhkjhlkmljnkhgvhf");
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
function changeSessionStorage() {
    var loginRead = sessionStorage.getItem("login");
    var passwordRead = sessionStorage.getItem("password");
    var inputLogin = document.getElementById("UserName");
    var inputPasword = document.getElementById("UserPassword");
    var buttonsLogin = document.getElementById("buttonsLogin");
    if (inputLogin == loginRead && inputPasword == passwordRead) {
        buttonsLogin.style.display="none";}

}

var contentElement = $('#content');
function login(url) {
    $.ajax({
        url:"templates/login.html",
        dataType: 'html',
        success: function(response) {
            contentElement.html(response);
        },
        error: function() {
            console.log('error')
        },
    });
}

function register(url) {
    $.ajax({
        url:"templates/register.html",
        dataType: 'html',
        success: function(response) {
            contentElement.html(response);
        },
        error: function() {
            console.log('error')
        },
    });
}

function contactPage(url) {
    $.ajax({
        url:"templates/contact.html",
        dataType: 'html',
        success: function(response) {
            contentElement.html(response);
        },
        error: function() {
            console.log('error')
        },
    });
}

function autos(url) {
    $.ajax({
        url: "templates/autos.html",
        dataType: 'html',
        success: function (response) {
            contentElement.html(response);
        },
        error: function () {
            console.log('error')
        },
    });
}
