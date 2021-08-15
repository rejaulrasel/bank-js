document.getElementById('withdraw-button').addEventListener('click', function () {

    //catch the withdraw field
    const withdrawField = document.getElementById('withdraw-field');

    //set withdraw field as a new withdraw amount
    const newWithdrawAmount = withdrawField.value;

    //catch withdraw area where new withdraw amount willa dd
    const withdrawReserve = document.getElementById('withdraw-reserve');
    const previousWithdrawAmount = withdrawReserve.innerText;

    // update total withdraw
    const totalWithdraw = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount);

    withdrawReserve.innerText = totalWithdraw;

    //set balce when customer withdraw his balance
    //first catch the balce reserve part 
    const balance = document.getElementById('balance-reserve');

    //set balance reserve part as previous balance amount  
    const previousBalanceAmount = balance.innerText;

    //set total balnace
    const totalBalance = parseFloat(previousBalanceAmount) - parseFloat(totalWithdraw);
    balance.innerText = totalBalance;

    //clear withdraw field;
    withdrawField.value = '';



})