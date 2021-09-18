
let form = document.querySelector('form');
let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');
let gender = document.querySelector('#gender');
let address = document.querySelector('#address');
let pin = document.querySelector('#pin');
let foodlist = document.querySelectorAll(".container [name='foods']");
let state = document.querySelector('#state');
let country = document.querySelector('#country');
let tableBody = document.querySelector("tbody");
let sr = 1;

form.addEventListener('submit', (event) => {
    console.log(event);
    event.preventDefault();
    let foodListArr = Array.from(foodlist);
    let checked = foodListArr.filter(food => food.checked == true);
    
    if (!(checked.length >= 2)) {
        alert("Please select at least 2 foods");
        return;
    }
    let finalFoodArr=[];
    checked.forEach(val => finalFoodArr.push(val.parentElement.innerText.trim()));
    finalFoodArr = finalFoodArr.toString();
    let objs = [fname, lname, address, pin, state, country];
    filledObjs = objs.filter(obj => obj.value == '');

    if (gender.value == 'default') {
        alert("Please select the gender");
        return;
    }
    if (objs.length == filledObjs.length) {
        alert("Please fill all inputs");
        return;
    }
    
    else {
        let element = `
        <tr>
        <th scope="row">${sr++}</th>
        <td>${fname.value}</td>
        <td>${lname.value}</td>
        <td>${gender.value}</td>
        <td>${address.value}</td>
        <td>${pin.value}</td>
        <td>${finalFoodArr}</td>
        <td>${state.value}</td>
        <td>${country.value}</td>
        </tr>
        `;

        tableBody.innerHTML += element;



    }
    form.reset();
});


