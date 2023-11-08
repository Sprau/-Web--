document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculator-form');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const loanAmount = parseFloat(document.getElementById('loan-amount').value);
        const interestRate = parseFloat(document.getElementById('interest-rate').value);
        const loanTerm = parseFloat(document.getElementById('loan-term').value);

        const monthlyInterestRate = (interestRate / 100) / 12;
        const numberOfPayments = loanTerm;
        const monthlyPaymentValue = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
        const totalPaymentValue = monthlyPaymentValue * numberOfPayments;
        const totalInterestValue = totalPaymentValue - loanAmount;

        monthlyPayment.textContent = `Ежемесячный платеж: $${monthlyPaymentValue.toFixed(2)}`;
        totalPayment.textContent = `Общая выплата: $${totalPaymentValue.toFixed(2)}`;
        totalInterest.textContent = `Общий процент: $${totalInterestValue.toFixed(2)}`;
    });
});