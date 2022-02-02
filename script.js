function changeBackground() {
    var box = document.querySelector('.blue_block');
    box.classList.toggle('red_block');
}

var container = document.querySelector('.blue_block');
container.addEventListener('mouseenter', changeBackground);
container.addEventListener('mouseleave', changeBackground);

// task2
function changeLike() {
    var likeCount = document.querySelector('#like-counter');
    likeCount.innerHTML = '1';
}
var dbclickF = document.querySelector('#like-btn');
dbclickF.addEventListener('dblclick', changeLike);


//task3
//var counter = 0;

var firstName = document.querySelector('#first_name2');
firstName.addEventListener('keydown', function (event) {
    //console.log(++counter);
    //console.log(event.key);
    if (event.key === 'Enter' && firstName.value.trim() !== '') {
        var currentText = firstName.value;
        var list = document.querySelector('#name_list');
        list.innerHTML += '<tr><td>' + currentText + '</td></tr>';
        firstName.value = '';
    }
})


// task4

var btnOpenModal = document.querySelector('#open-modal');
var modal = document.querySelector('#modal1');
btnOpenModal.addEventListener('click', function () {
    modal.classList.add('modal_open');
    // console.log(event.key)
    // classList.remove('modal_open')
    //Escape
});


var counterNew = document.querySelector('.modal-content');
window.addEventListener('keydown', function (event) {
    console.log(event.key)
    if (event.key === 'Escape' || event.key === 'Enter') {
        modal.classList.remove('modal_open');
    }
})

// task5

var input5 = document.getElementById('first_login');
input5.addEventListener('input', function () {
    if (input5.value.length >= 4 && input5.value.trim() !== '') {
        input5.nextElementSibling.style.display = 'none';
    } else {
        input5.nextElementSibling.style.display = 'block';
    }
})


// task6
var input6 = document.getElementById('first_login2');
// console.log(document.getElementById('first_login2').value[0]);
input6.addEventListener('input', function () {
    if (input6.value.trim() !== '' && input6.value.trim()[0] === input6.value.trim()[0].toUpperCase() && input6.value.trim().length >= 1) {

        input6.nextElementSibling.style.display = 'none';
    } else {
        input6.nextElementSibling.style.display = 'block';
    }
});

// task7

function calculateWater() {
    var inpur7 = document.querySelector('#first_kg');
    var currentWeight = inpur7.value;
    var totalInfo = document.querySelector('#final-calculate');
    totalInfo.innerText = `${currentWeight * 30} мл`;
    inpur7.value = '';
}

var btnWeightCalculate = document.addEventListener('click', calculateWater)

// task8

function salary() {
    var firstMeaning = document.getElementById('first_days');
    var salaryIs = document.getElementById('final-salary');
    var select = document.querySelector('select');
    var value = select.value;
    salaryIs.innerText = `${firstMeaning.value * value * 8} $`;
    firstMeaning.value = '';

    // console.log(finalValue)
}
var btnSalary = document.getElementById('calculate-salary');
btnSalary.addEventListener('click', salary);


// task9

var input9 = document.getElementById('first_login9');
var inpUp = document.getElementsByClassName('error-message3');
var inp5Simb = document.getElementsByClassName('error-message4');


input9.addEventListener('input', function () {

    if (input9.value.trim() !== '' && input9.value.trim()[0] === input9.value.trim()[0].toUpperCase() && input9.value.trim().length > 0) {
        inpUp[0].style.display = 'none';

    } else {
        inpUp[0].style.display = 'block';
    }
    if (input9.value.trim() !== '' && input9.value.trim().length >= 5) {
        inp5Simb[0].style.display = 'none';
    } else {
        inp5Simb[0].style.display = 'block';
    }
})
