// create a display with javascript
let display = document.getElementById('display');

// group all buttons
let calButton = Array.from(document.getElementsByClassName('calButton'));

calButton.map( calButton => {
    calButton.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CA':
                display.innerText = '';
                break;
            case '=':
                display.innerText = eval(display.innerText);
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});