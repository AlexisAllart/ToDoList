let target = document.getElementById('target');
let oldTarget = target.textContent;
let input = document.getElementById('input');
let display = document.getElementById('display');
let oldDisplay = display.textContent;
let hoveringDisplay = false;

function reverseString(str) {
    array = str.split("");
    reversed = array.reverse();
    str = reversed.join("");
    return str;
}

function onTargetHover() {
    target.textContent === oldTarget ? target.textContent = reverseString(oldTarget) : target.textContent = oldTarget;
}

function onTargetClick() {
    target.classList.toggle('toggle');
}

// JS crée toujours un objet 'fantôme' lorsqu'il lance une fonction sans (); on ajoute "keyPressed" pour le stocker et le réutiliser (ici pour scanner le type de touche pressée)
// On retrouve toutes les propriétés de l'objet dans la console (facultatif)
function onKeyPress(keyPressed) {
    // debug : afficher keyPressed dans la console pour voir toutes les propriétés de l'objet
    // console.log(keyPressed);
    if (keyPressed.keyCode === 13 && input.value.trim().length) {
        const ul = document.getElementById('list');
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.setAttribute('src', 'delete.png');
        img.setAttribute('width', '16');
        img.setAttribute('height', '16');
        img.setAttribute('align', 'right');
        img.setAttribute('alt', 'Delete this task');
        // on crée une ID (ici par rapport à la date)
        li.id = Date.now();
        // on pourrait directement faire "li.textContent = input.value;" (les anciennes versions ne le permettaient pas : seul createTextNode était possible)
        // pour faire simple, un tag <p>#text</p> contient plusieurs éléments : <p> puis #text, <p> est parent de #test (d'où l'injection via appendChild)
        li.appendChild(document.createTextNode(input.value));
        li.appendChild(img);
        ul.appendChild(li);

        input.value = "";
        display.textContent = "";
    }
    else {
        if (hoveringDisplay === false) {
            display.textContent = input.value;
            oldDisplay = display.textContent;
        }
    }
}

function onDisplayHover() {
    display.textContent === oldDisplay ? display.textContent = reverseString(oldDisplay) : display.textContent = oldDisplay;
    hoveringDisplay = !hoveringDisplay;
}

function onDisplayClick() {
    display.classList.toggle('toggle');
}

function onMouseOut() {
    display.textContent = input.value;
    oldDisplay = display.textContent;
}

function onListClick(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === 'LI') {
        if (clickedElement.style.textDecoration != 'line-through') {
            clickedElement.style.textDecoration = 'line-through';
        }
        else {
            clickedElement.style.textDecoration = 'none';
        }
    }
}

function onDeleteClick(event) {
    const clickedElement = event.target;
    const deletedTask = clickedElement.parentNode;
    list.removeChild(deletedTask);
}

target.addEventListener('click', onTargetClick, false);
target.addEventListener('mouseover', onTargetHover, false);
target.addEventListener('mouseout', onTargetHover, false);

input.addEventListener('keyup', onKeyPress, false);

display.addEventListener('click', onDisplayClick, false);
// display.addEventListener('mouseover', onDisplayHover, false);
// display.addEventListener('mouseout', onDisplayHover, false);

list.addEventListener('click', onListClick, false);
list.addEventListener('click', onDeleteClick, false);

var parent = document.getElementById('list');
var child = document.getElementsByTagName("LI");
child.style.right = child.clientWidth - child.offsetWidth + "px";