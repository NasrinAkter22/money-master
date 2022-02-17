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

    const foodInputNumber = parseFloat(foodInput);
    const rentInputNumber = parseFloat(rentInput)
    const clothesInputNumber = parseFloat(clothesInput);


    //error
    if(foodInputNumber>0 && typeof foodInputNumber=='number' && rentInputNumber>0 && typeof rentInputNumber=='number' && clothesInputNumber>0 && typeof clothesInputNumber=='number'){
    // calculate
    const calculateTotal =foodInputNumber+ rentInputNumber+ clothesInputNumber;
    ///calculate balance Total
    const balanceTotal = incomeText - calculateTotal; 
    document.getElementById('balance').innerText = balanceTotal;
    document.getElementById("total-expense").innerText = calculateTotal

    }else{
        alert('Type the number')
    }


  
}
// save button
document.getElementById('save-button').addEventListener('click',function(){
   
 const incomeInput=document.getElementById('income-filed');
 const savingInput=document.getElementById('save-input');
 const savingAmount=(parseFloat(incomeInput.value)*parseFloat(savingInput.value))/100;

 const balance=document.getElementById('balance');


 //error
 
 if(parseInt(balance.innerText)>savingAmount){
    document.getElementById('saving-amount').innerText=savingAmount;
    const remaingBalance=parseFloat(balance.innerText)-savingAmount;

    document.getElementById('remaing-balance').innerText=remaingBalance;

}else{
    alert('You do not have enough money to save')
}

} )