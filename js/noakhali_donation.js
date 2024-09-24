document
  .getElementById("noakhali_donation_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // const addMoney = document.getElementById("noakhali_add_money_input").value;
    // const balance = document.getElementById("account_balance").innerText;
    // const mainBalance = document.getElementById("main_balance").innerText;

    // using function....
    const addMoney = getInputValueById("noakhali_add_money_input");
    const balance = getInputNumberById("account_balance");
    const mainBalance = getInputNumberById("main_balance");

    if (isNaN(addMoney) || addMoney === "") {
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
    } else {
      const myModal = document.getElementById("my_modal");
      myModal.showModal();
    }

    // added new Balance in UI...
    document.getElementById("account_balance").innerText = newBalance;

    // minus from main balance...
    document.getElementById("main_balance").innerText = neewBalance;


    
    // history List added
    const historyList = document.createElement("div");
    historyList.className =
      " gap-5 space-y-5 lg:space-y-0 max-w-[1200px] border-[1px] rounded-xl mx-auto p-5 my-10";

    historyList.innerHTML = `

      <p class="font-bold mb-2">${addMoneyNumber} Taka is Donated for Flood Relief in Noakhali,Bangladesh.</p>
      <p>Date: ${new Date().toString()} </p>
    
    `;
    const historyContainer = document.getElementById("history_list");
    historyContainer.insertBefore(historyList, historyContainer.firstChild);
  });
