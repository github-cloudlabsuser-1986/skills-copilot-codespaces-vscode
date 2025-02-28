const assert = require('assert');
const Calculator = require('./test.js');

describe('Calculator', function() {
    let calculator;

    beforeEach(function() {
        calculator = new Calculator();
    });

    it('should add two numbers correctly', function() {
        assert.strictEqual(calculator.add(5, 3), 8);
    });

    it('should subtract two numbers correctly', function() {
        assert.strictEqual(calculator.subtract(5, 3), 2);
    });

    it('should multiply two numbers correctly', function() {
        assert.strictEqual(calculator.multiply(5, 3), 15);
    });

    it('should divide two numbers correctly', function() {
        assert.strictEqual(calculator.divide(6, 3), 2);
    });

    it('should throw an error when dividing by zero', function() {
        assert.throws(() => calculator.divide(5, 0), Error, "Division by zero is not allowed.");
    });
});