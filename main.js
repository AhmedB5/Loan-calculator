let amount = document.querySelector(".amount");
let months = document.querySelector(".months");
let Interest = document.querySelector(".Interest");
let Calculate = document.querySelector(".Calculate");
let monthly = document.querySelector(".monthly");
let Total = document.querySelector(".Total");
let interest = document.querySelector(".interest");
let amountValue;
let mon;
let percent;

amount.addEventListener("blur", function () {
  amountValue = parseInt(amount.value);

  console.log(amountValue);
});
//#######################################################

months.addEventListener("input", function () {
  let numberOfMonths = months.value;
  let numericValue = numberOfMonths.replace(/\D/g, "");

  months.value = numericValue;
  if (numberOfMonths !== numericValue) {
    confirm("Please enter numbers only");
  }
  mon = parseInt(numericValue);
  console.log(mon);
});

//########################################################

Interest.addEventListener("input", function () {
  let InterestValue = Interest.value;

  let reg = InterestValue.replace(/\D+/g, "");
  Interest.value = reg;

  if (InterestValue !== reg) {
    confirm("Please enter numbers only");
  } else {
    percent = parseInt(reg);
    console.log(percent);
  }
});
//##########################################################

Calculate.addEventListener("click", function () {
  let MonthlyPayments = amountValue + (amountValue * percent) / 100;
  let all = (MonthlyPayments / mon).toFixed(2);
  console.log(all);
  monthly.innerHTML = "$" + all;
  let TotalPrincipalPaid = amountValue;
  Total.innerHTML = "$" + TotalPrincipalPaid;
  let TotalInterestPaid = percent * mon;
  interest.innerHTML = "$" + TotalInterestPaid;
});
