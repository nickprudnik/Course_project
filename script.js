'use strict';

menu.onclick = function myFunction() { 
const x = document.getElementById('myTopnav');

if (x.className === "menu-main"){ 
x.className += " responsive"; 
} else { 
x.className = "menu-main"; 
} 
};
function store(){
    let inputName= document.getElementById("Name");
    localStorage.setItem("Name", inputName.value);
    let inputSurname= document.getElementById("Surname");
    localStorage.setItem("Surname", inputSurname.value);
    let inputEmail= document.getElementById("Email");
    localStorage.setItem("Email", inputEmail.value);
    let inputNumber= document.getElementById("Number");
    localStorage.setItem("Number", inputNumber.value);
    let inputComments= document.getElementById("Comments");
    localStorage.setItem("Comments", inputComments.value);
    let input = document.querySelectorAll("#Name, #Surname, #Email, #Number, #Comments");
    if (input.value !== '') {
        let storedValue = `${localStorage.getItem("Name")} ваша заявка принята`;
        document.getElementById("request_name").innerHTML = storedValue;
    } else {
        let not_storedval = `Заполните пожалуйста форму`;
        document.getElementById("not_request").innerHTML = not_storedval;
    }
}