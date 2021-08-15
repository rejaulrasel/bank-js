//deposit button event handle
document.getElementById('deposit-button').addEventListener('click', function () {

    // catch the deposit field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;



    // catch the deposit area where money will reserve
    const depositReserve = document.getElementById('deposit-reserve');
    const previousDepositAmount = depositReserve.innerText;



    // set deposit input to deposit reserve part
    const totalDepositAmount = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositReserve.innerText = totalDepositAmount;

    // step 02:Update total balance
    // catch the balance part
    const balance = document.getElementById('balance-reserve');
    const previousBalanceAmount = balance.innerText;
    const totalBalance = parseFloat(previousBalanceAmount) + parseFloat(newDepositAmount);
    balance.innerText = totalBalance;

    //clear the deposit field value
    depositField.value = '';
})




// document.getElementById('deposit-button').addEventListener('keyup', function(){
//     const inputField = document.getElementById('input-field');

// })