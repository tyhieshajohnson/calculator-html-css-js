// create a function for display 
let display = document.getElementById('display');

// create a function for ALL buttons
let calButton = Array.from(document.getElementsByClassName('calButton'));

// create a map array 
// map () creates a new array from calling a function for every array element. 
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

let display = document.getElementById(['display']);
function add(){
    let first = document.querySelectorAll(['data-answer']).value
    let second = document.querySelectorAll(['data-answer']).value
    // let answer = +first + second
    let answer =eval('$(first) + $(second)');
    // display.value = answer
    display.value += answer;
}