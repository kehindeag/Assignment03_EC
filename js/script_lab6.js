// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
rate = parseFloat(prompt('Enter interest rate as xx.x'));
years = parseInt(prompt('Enter the number of years you want to invest for'));

// CALCULATE FUTURE VALUE
futureValue = investment;


// CALCULATE FUTURE VALUE
futureValue = investment;

if(!isNaN(investment) &&
!isNaN(rate) &&
rate >= 0 &&
rate <= 6 &&
!isNaN(years) &&
years >= 1 &&
years <= 30){
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}} else {
    alert('ops!! invalid entries')
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);