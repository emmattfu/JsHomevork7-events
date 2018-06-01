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
    let tagName = evn.target.tagName;
    paragraph.insertAdjacentText("beforeend", tagName);
}