const myDisplay = document.getElementById('myDisplay');

function myClear() {
    myDisplay.value = '';
}

function myBackspace() {
    myDisplay.value = myDisplay.value.slice(0, -1);
}

function myInput(value) {
    myDisplay.value += value;
}

function myCalculate() {
    try {
        myDisplay.value = eval(myDisplay.value.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch (error) {
        myDisplay.value = 'Error';
    }
}
