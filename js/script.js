const tripInfoButton = document.querySelector(".trip-info");
const dailyBudget = document.querySelector(".daily-budget");
const changeImg = document.querySelector("img");

const tripInfo = function () {
  const totalBudget = Number(prompt("What is your total budget? Ex. 1000"));
  const accomodation = Number(
    prompt("What are your accommodation costs? Ex. 500")
  );
  const numDays = Number(prompt("How many days does your trip last? Ex. 6"));
  calculateDailyBudget(totalBudget, accomodation, numDays);
};

const calculateDailyBudget = function (totalBudget, accommodation, numDays) {
  const daily = ((totalBudget - accommodation) / numDays).toFixed(2);
  dailyBudget.innerText = `You can spend $${daily} a day on food and fun!`;
};

tripInfoButton.addEventListener("click", function () {
  tripInfo();
  changeImg.src = "img/vacation.jpg";
  changeImg.alt = "vacation";
});
