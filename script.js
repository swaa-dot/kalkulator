let currentDisplay = '0';
const display = document.getElementById('id');

function updateDisplay(){
    display.textContent = currentDisplay;
}

function appendToDisplay(value){
    if (currentDisplay === '0' && value !== '.'){
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    updateDisplay();
}

function clearDisplay(){
    currentDisplay = '0';
    updateDisplay();
}

function backspace(){
    if (currentDisplay.length > 1){
        currentDisplay = '0';
    } else {
        currentDisplay = currentDisplay.slice(0. -1);
    }
    updateDisplay();
}

function culculate(){
    try {
       currentDisplay = currentDisplay.replace(/x/g, '*');
       const result = eval(currentDisplay);
       currentDisplay = result.toString();
       updateDisplay(); 
    } catch (error) {
        currentDislay = 'error';
        updateDisplay();
        setTimeout(clearDisplay, 1000);
    }
}
updateDisplay();