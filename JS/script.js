// create a display with javascript
let display = document.getElementById('display');

// group all buttons
let calButton = Array.from(document.getElementsByClassName('calButton'));

calButton.map( calButton => {
    calButton.addEventListener('click', (e) => {
        console.log('clicked');
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);
    });
});