//function to Calc and display tip, total bill and amount per person
function calculateAndDisplay() {
    //get values from html form
let bill = parseFloat(document.getElementById('totalBill').value)
let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
let serviceQuality = document.getElementById('serviceQuality').value

//calculate tip, total bill and amount per person

let tip = calculateTip(bill, serviceQuality)
let totalBill = calculateTotalBill(bill, tip)
let amtPerPers = calcAmtPerPers(totalBill, numOfPpl)

//display results in html
document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
document.getElementById('totalBillResult').innerText = 'Bill: $' + bill.toFixed(2)
document.getElementById('amtPerPersonResult').innerText = 'Amount per person: $' + amtPerPers.toFixed(2)
}