document
  .getElementById("quota_donation_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    

    // using function....
    const addMoney = getInputValueById("quota_add_money_input");
    const balance = getInputNumberById("quota_account_balance");
    const mainBalance = getInputNumberById("main_balance");

    if (isNaN(addMoney)) {
      alert("Failed to Donate, Please insert correct amount!");
      return;
    }

    const addMoneyNumber = parseFloat(addMoney);
    const balanceNumber = parseFloat(balance);
    const mainBalanceNumber = parseFloat(mainBalance);

    const newBalance = addMoneyNumber + balanceNumber;

    if (addMoneyNumber <= 0) {
      alert("Invalid Input!");
      return;
    }

    const neewBalance = mainBalanceNumber - addMoneyNumber;

    if (addMoneyNumber > mainBalanceNumber) {
      alert("Donation Failed! You Have Not Enough money.");
      return;
    } 
    else {
      const modal = document.getElementById("my_modal");
      modal.showModal();
    }

    // added new Balance in UI...
    document.getElementById("quota_account_balance").innerText = newBalance;

    // minus from main balance...
    document.getElementById("main_balance").innerText = neewBalance;
  });
