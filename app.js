function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculateFactorial() {
    var numberInput = document.getElementById("numberInput");
    var resultDiv = document.getElementById("result");
    var number = parseInt(numberInput.value);

    if (isNaN(number) || number < 0) {
        resultDiv.textContent = "Please enter a valid number greater than or equal to zero.";
        return;
    }

    var result = factorial(number);
    resultDiv.textContent = "The factorial of " + number + " is: " + result;
}