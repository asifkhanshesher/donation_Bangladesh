const historyTab = document.getElementById("history_tab");
const donationTab = document.getElementById("donation_tab");

historyTab.addEventListener("click", function () {
  historyTab.classList.add("bg-[#B4F461]", "rounded-md");

  donationTab.classList.remove("bg-[#B4F461]", "rounded-md");

  document.getElementById('donation_cards').classList.add('hidden')
});
