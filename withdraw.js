//step 1
document.getElementById('btn-withdraw').addEventListener('click', function () {

    //step 2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //step 3
    withdrawField.value = '';

    //step 4
    const withdrawTotal = document.getElementById('withdraw-total');
    const newWithdrawTotalString = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(newWithdrawTotalString);

    //step 5
    const currentWithdrawTotal = newWithdrawAmount + newWithdrawTotal;
    withdrawTotal.innerText = currentWithdrawTotal;

    //step 6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);


    ///step 7
    const currentWithdrawAmount = previousBalanceTotalAmount - newWithdrawAmount;
    balanceTotalElement.innerText = currentWithdrawAmount;




})