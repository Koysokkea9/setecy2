document.addEventListener("DOMContentLoaded", function () {
  let count = 15;
  const countDisplay = document.getElementById("count");

  window.increase = function () {
    count++;
    countDisplay.textContent = count;
  };

  window.decrease = function () {
    count--;
    countDisplay.textContent = count;
  };

  window.reset = function () {
    count = 0;
    countDisplay.textContent = count;
  };
});
