const historyTab = document.getElementById("history_tab");
const donationTab = document.getElementById("donation_tab");


// for history button
historyTab.addEventListener("click", function () {
  historyTab.classList.add("bg-[#B4F461]", "rounded-md");

  donationTab.classList.remove("bg-[#B4F461]", "rounded-md");

  document.getElementById('donation_section').classList.add('hidden');
  document.getElementById('history_section').classList.remove('hidden');
});



// for donation button
donationTab.addEventListener('click',function(){
  donationTab.classList.add("bg-[#B4F461]", "rounded-md");

  historyTab.classList.remove("bg-[#B4F461]", "rounded-md");


  document.getElementById('donation_section').classList.remove('hidden');
  document.getElementById('history_section').classList.add('hidden')
})
