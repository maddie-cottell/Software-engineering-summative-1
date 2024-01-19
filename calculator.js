/ Java script calculator

function calculateLoan() {
    // Get input values
    var income = document.getElementById('income').value;
    var propertyValue = document.getElementById('propertyValue').value;

    // Validate input
    if (income === "" && propertyValue === "") {
        alert("Please enter either your income or the value of the property.");
        return;
    }

    // Perform calculations
    var loanToIncome = income !== "" ? income * 4.5 : null;
    var loanToValue = propertyValue !== "" ? propertyValue * 0.8 : null;

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
