// События: задачи
const btn = document.getElementById('btn-msg');
const tag = document.getElementById('tag');
const body = document.body;
const paragraph = document.querySelector('p');

// Events
btn.addEventListener('click', alertEvent);
btn.addEventListener('mouseover', addColor);
btn.addEventListener("mouseout", removeColor);
body.addEventListener("click", bodyClick);

//Functions
function alertEvent(evn) {
    alert(btn.textContent);
}

function addColor(evn) {
    event.target.style.backgroundColor = 'red';
}

function removeColor(evn) {
    btn.setAttribute('style', '');
}

function bodyClick(evn) {
    if (paragraph.lastChild.data) paragraph.lastChild.data = '';
    let tagName = evn.target.tagName.toLowerCase();
    paragraph.insertAdjacentText("beforeend", tagName);
}

let arr = [
    {
        "лето": "одень футболку"
    },
    {
        "осень": "одень куртку и штаны"
    },
    {
        "зима": "одень шубу и теплые штаны"
    },
    {
        "весна": "одень ветровку и джинсы"
    }
];
const form = document.forms[0];
const select = form.elements[0];
const input = form.elements[1];
select.addEventListener('change', formFunc);

function formFunc(evn) {
    input.value = handler(arr);
}

function handler(array, callback) {
    for (let element of arr) {
        if (select.value.toLowerCase() === handler2(element)) return handler3(element);
    }
    // return result;
}

function handler2(element) {
    let result;
    for (let value in element) {
         result = value;
    }
    return result;
}

function handler3(element) {
    let result;
    for (let value in element) {
        result = element[value];
    }
    return result;
}