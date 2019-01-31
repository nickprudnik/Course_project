'use strict';

menu.onclick = function myFunction() { 
const x = document.getElementById('myTopnav');

if (x.className === "menu-main"){ 
x.className += " responsive"; 
} else { 
x.className = "menu-main"; 
} 
};
document.getElementById("submit").onclick = function (){
    let error = false
    document.getElementById("Name").classList.remove("error")
    document.getElementById("errorName").style.display = "none"
    document.getElementById("Surname").classList.remove("error")
    document.getElementById("errorSurname").style.display = "none"
    document.getElementById("Email").classList.remove("error")
    document.getElementById("errorEmail").style.display = "none"
    document.getElementById("Number").classList.remove("error")
    document.getElementById("errorNumber").style.display = "none"
    let inputName= document.getElementById("Name")
    if (inputName.value.length < 2){
        error = true;
        document.getElementById("Name").classList.add("error")
        document.getElementById("errorName").style.display = "block"
    }
    let inputSurname = document.getElementById("Surname");
    if (inputSurname.value.length < 3){
        error = true;
        document.getElementById("Surname").classList.add("error");
        document.getElementById("errorSurname").style.display = "block"
    }
    let inputEmail = document.getElementById("Email");
    if (inputEmail.value.length < 3){
        error = true;
        document.getElementById("Email").classList.add("error");
        document.getElementById("errorEmail").style.display = "block"
    }
    let inputNumber = document.getElementById("Number");
    if (inputNumber.value.length < 3){
        error = true;
        document.getElementById("Number").classList.add("error");
        document.getElementById("errorNumber").style.display = "block"
    }
    if (!error){
        localStorage.setItem("Name", inputName.value);
        localStorage.setItem("Surname", inputSurname.value);
        localStorage.setItem("Email", inputEmail.value);
        localStorage.setItem("Number", inputNumber.value);
        let storedValue = `${localStorage.getItem("Name")} ваша заявка принята`;
        document.getElementById("request_name").innerHTML = storedValue;
        document.getElementById("openModal").style.display = "block"
    }

};
document.getElementById("close").onclick = function () {
    document.getElementById("openModal").style.display = "none";
}
document.getElementById("too_close").onclick = function (){
    document.getElementById("openModal").style.display = "none"
};
