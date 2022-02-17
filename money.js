// handle calculate button 
document.getElementById('calculate-button').addEventListener('click', function () {
    calculate()
     
})
//income filed 
function calculate() {
    const incomeInput = document.getElementById("income-filed").value;
    const incomeText = parseFloat(incomeInput);
   // console.log(incomeText);

    // expense

    const foodInput = document.getElementById('food-filed').value;
    const rentInput = document.getElementById('rent-filed').value;
    const clothesInput = document.getElementById('clothes-filed').value;
    // calculate
    const calculateTotal =
        parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
    ///calculate balance Total
    const balanceTotal = incomeText - calculateTotal; 
    document.getElementById('balance').innerText = balanceTotal;
    document.getElementById("total-expense").innerText = calculateTotal;

}