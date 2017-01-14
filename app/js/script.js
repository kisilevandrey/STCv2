$('.submit').on('click', userSessionStorageWrite);
$('#login_button').on('click', login);
$('#register_button').on('click',register);
$('#contacts').on('click', contactPage);
$('#car').on('click', autos);
$('#news').on('click', newsPage);
$('#userLogo').on('click', clearSessionStorage);
$(window).on('load',changeSessionStorage);




function validateFormRegister() {
    const userEmail = document.getElementById("UserEmail");
    const regEmail = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
    const password1 = document.getElementById("UserPassword1");
    const regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/ ;
    const password2 = document.getElementById("UserPassword2");

    //Проверка поля "Имя"
    if (!document.getElementById('Name').value) {
        document.getElementById('errName').innerHTML = '* Введите имя';
        document.getElementById('Name').style.border = "2px solid red";
        return false}
    else if (document.getElementById('Name').value.length<3){
        document.getElementById('errName').innerHTML = '* Имя слишком короткое';
        document.getElementById('Name').style.border = "2px solid red";
        return false}
    else {
        document.getElementById('errName').innerHTML = "";
        document.getElementById('Name').style.border = "2px solid green";}

    //Проверка поля "Логин"
    if (!document.getElementById('UserName').value) {
        document.getElementById('errLogin').innerHTML = '* Введите логин';
        document.getElementById('UserName').style.border = "2px solid red";
        return false}
    else if (document.getElementById('UserName').value.length<3){
        document.getElementById('errLogin').innerHTML = '* Логин слишком короткий';
        document.getElementById('UserName').style.border = "2px solid red";
        return false}
    else {
        document.getElementById('errLogin').innerHTML = "";
        document.getElementById('UserName').style.border = "2px solid green";}

    //Проверка поля "Email"
    if (!userEmail.value) {
        document.getElementById('errEmail').innerHTML = '* Введите ваш имейл';
        userEmail.style.border = "2px solid red";
        return false}
    else if (!regEmail.test(userEmail.value)){
        document.getElementById('errEmail').innerHTML = '* Имейл не корректный, попробуйте снова';
        userEmail.style.border = "2px solid red";
        return false}
    else {
        document.getElementById('errEmail').innerHTML = "";
        userEmail.style.border = "2px solid green";}

    //Проверка поля "Phone"
    if (!document.getElementById('UserPhone').value) {
        document.getElementById('errPhone').innerHTML = '* Введите ваш телефон';
        document.getElementById('UserPhone').style.border = "2px solid red";
        return false}
    else if (document.getElementById('UserPhone').value.length<13){
        document.getElementById('errPhone').innerHTML = '* Формат ввода должен быть: +380...';
        document.getElementById('UserPhone').style.border = "2px solid red";
        return false}
    else {
        document.getElementById('errPhone').innerHTML = "";
        document.getElementById('UserPhone').style.border = "2px solid green";}

    //Проверка поля пароль
    if (!password1.value) {
        document.getElementById('errPass1').innerHTML = '* Введите ваш пароль';
        password1.style.border = "2px solid red";
        return false}
    else if (!regPass.test(password1.value)){
        document.getElementById('errPass1').innerHTML = '* Пароль должен содержать заглавную букву, число, любой знак и быть не короче 6 символов';
        password1.style.border = "2px solid red";
        return false}
    else {
        document.getElementById('errPass1').innerHTML = "";
        password1.style.border = "2px solid green";}

    //Проверка поля пароль 2
    if (!password2.value) {
        document.getElementById('errPass2').innerHTML = '* Введите ваш пароль';
        password2.style.border = "2px solid red";
        return false}
    else if (password1.value !== password2.value){
        document.getElementById('errPass2').innerHTML = '* Пароли не совпадают';
        password2.style.border = "2px solid red";
        return false}
    else {
        document.getElementById('errPass2').innerHTML = "";
        password2.style.border = "2px solid green";}
    return userSessionStorageWrite();
}


function userSessionStorageWrite() {
    let login = document.getElementById("UserName");
    let name = document.getElementById("Name");
    let email = document.getElementById("UserEmail");
    let password = document.getElementById("UserPassword1");
    let phoneNumber = document.getElementById("UserPhone");
    sessionStorage.setItem("login", login);
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    sessionStorage.setItem("phoneNumber", phoneNumber);
    $('#content').load('templates/login.html');
}


function userSessionStorageRead(){
    let loginRead = sessionStorage.getItem("login");
    let passwordRead = sessionStorage.getItem("password");
    let inputLogin = document.getElementById("UserName");
    let inputPasword = document.getElementById("UserPassword");
    let buttonsLogin = document.getElementById("buttonsLogin");
    let userLogo = document.getElementById("userLogo");
    let status = sessionStorage.getItem("Status");


    if (inputLogin == loginRead && inputPasword == passwordRead) {
        buttonsLogin.style.display="none";
        userLogo.style.display = "block"
        sessionStorage.setItem("Status", true);
        location.reload();
        return changeSessionStorage;

    }
        else {
        alert("Неверный пароль или логин")
    }
}
function changeSessionStorage() {
    let loginRead = sessionStorage.getItem("login");
    let passwordRead = sessionStorage.getItem("password");
    let inputLogin = document.getElementById("UserName");
    let inputPasword = document.getElementById("UserPassword");
    let buttonsLogin = document.getElementById("buttonsLogin");
    let userLogo = document.getElementById("userLogo");
    let status = sessionStorage.getItem("Status");
    if (status){

        buttonsLogin.style.display = "none";
        userLogo.style.display = "block"
    }
    else {
        console.log("error read sessionStorage");
    }
}

function clearSessionStorage() {
    sessionStorage.clear();
    location.reload();
}

let contentElement = $('#content');

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

function newsPage(url) {
    $.ajax({
        url: "templates/news.html",
        dataType: 'html',
        success: function (response) {
            contentElement.html(response);
        },
        error: function () {
            console.log('error')
        },
    });
}
