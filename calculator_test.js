// calculator.test.js

const { calculateLoan, isValidNumber } = require('./calculator');

describe('isValidNumber', () => {
    test('should return true for a valid number', () => {
        expect(isValidNumber(42)).toBe(true);
    });

    test('should return false for an invalid number', () => {
        expect(isValidNumber('invalid')).toBe(false);
    });

    test('should return false for a negative number', () => {
        expect(isValidNumber(-5)).toBe(false);
    });
});

describe('calculateLoan', () => {
    test('should calculate Loan-to-Income correctly', () => {
        // Mock the document.getElementById function for testing
        document.getElementById = jest.fn().mockReturnValue({ value: '50000' });

        calculateLoan();

        // Check the output
        expect(document.getElementById('output').innerHTML).toContain('Loan-to-Income');
    });

    test('should display an error message for invalid input', () => {
        // Mock the document.getElementById function for testing
        document.getElementById = jest.fn().mockReturnValue({ value: 'invalid' });

        calculateLoan();

        // Check if an alert was shown
        expect(window.alert).toHaveBeenCalledWith("Please enter a valid number for either your income or the value of the property.");
    });
});
