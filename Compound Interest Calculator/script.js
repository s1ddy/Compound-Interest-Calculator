var principal = 0;
var interestRate = 0;
var timesCompounded = 0;
var termOfLoan = 0;
var amount = 0;


function compoundInterest() {
  event.preventDefault();
  var principal = parseFloat(document.getElementById("principal_amount").value);
  var interestRate = parseFloat(document.getElementById("rate").value);
  interestRate = interestRate / 100;
  var timesCompounded = parseFloat(document.getElementById("rates_billing").value);
  var termOfLoan = parseFloat(document.getElementById("number_of_year").value);
  var a = interestRate / timesCompounded;
  var b = 1 + a;
  var c = timesCompounded * termOfLoan;
  var d = Math.pow(b, c);
  var amount = (principal * d).toFixed(2);
  document.getElementById("ciOutput-01").innerHTML = "Interest: $" + (amount - principal).toFixed(2);
  document.getElementById("ciOutput-02").innerHTML = "Total plus interest: $" + amount;
}