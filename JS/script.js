document.addEventListener('DOMContentLoaded', function () {
    // Get the display input
    let displayInput = document.getElementById('calInput');

    // Get all buttons
    let buttons = document.querySelectorAll('.calButton button');

    // Add click event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            updateDisplay(e.target.innerText);
        });
    });

    // Function to update the display based on button clicks
    function updateDisplay(value) {
        switch (value) {
            case 'CA':
                displayInput.value = '';
                break;
            case '=':
                try {
                    displayInput.value = eval(displayInput.value);
                } catch (error) {
                    displayInput.value = 'Error';
                }
                break;
            default:
                displayInput.value += value;
        }
    }
});
