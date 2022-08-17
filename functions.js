const h1 = document.getElementById('demo1');

h1.addEventListener('click', e => {
    document.body.style.backgroundColor = generateColor();
})
h1.addEventListener('mouseout', e => {
    document.body.style.removeProperty('background-color');
})

const h2 = document.getElementById('demo2');

h2.addEventListener('mouseover', e => {
    h2.textContent = 'Hello there';
})

let input = '';

document.addEventListener('keypress', function onEvent(event) {
    input += event.key;
    const newPara = document.createElement('p');
    newPara.setAttribute('id', 'newP');
    if (!document.getElementById('newP')) {
        newPara.appendChild(document.createTextNode(input));
        document.body.appendChild(newPara);
    }
    else {
        document.getElementById('newP').textContent = input;
    }
})

function generateColor () {
    let maxVal = 0xFFFFFF; 
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
