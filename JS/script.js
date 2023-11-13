// create a display with javascript
let display = document.getElementById('display');

// group all buttons
let calButton = Array.from(document.getElementsByClassName('calButton'));

calButton.map(calButton => {
    calButton.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'CA':
                display.innerText = '';
                break;
            case '=':
                display.innerText = eval(display.innerText);
                break;
            default:
                // Check if the last character is a number before appending
                if (!isNaN(display.innerText.slice(-1))) {
                    display.innerText += e.target.innerText;
                } else {
                    // If the last character is not a number, replace it with the new one
                    display.innerText = display.innerText.slice(0, -1) + e.target.innerText;
                }
        }
    });
});
