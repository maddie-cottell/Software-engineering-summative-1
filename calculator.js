// calculator.js

function calculateLoan() {
    // Get input values
    var income = document.getElementById('income').value;
    var propertyValue = document.getElementById('propertyValue').value;

    // Validate input
    if (!isValidNumber(income) && !isValidNumber(propertyValue)) {
        alert("Please enter a valid number for either your income or the value of the property.");
        return;
    }

    // Perform calculations
    var loanToIncome = isValidNumber(income) ? income * 4.5 : null;
    var loanToValue = isValidNumber(propertyValue) ? propertyValue * 0.8 : null;

    // Display results in the output box
    var outputBox = document.getElementById('output');
    outputBox.innerHTML = "";

    if (loanToIncome !== null) {
        outputBox.innerHTML += "Loan-to-Income: £" + loanToIncome.toFixed(2) + "<br>";
    }

    if (loanToValue !== null) {
        outputBox.innerHTML += "Loan-to-Value: £" + loanToValue.toFixed(2);
    }
}

function isValidNumber(value) {
    // Check if the value is a valid number
    return !isNaN(value) && parseFloat(value) >= 0;
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateLoan,
        isValidNumber,
    };
}
