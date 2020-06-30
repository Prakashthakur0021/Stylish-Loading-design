const progress = document.querySelector(".progress-value");
const percentage = document.querySelector("input");

window.onload = function () {
  changed();
};

percentage.setAttribute("value", 70);
changed = () => {
  setTimeout(() => {
    progress.style.opacity = 1;

    if (percentage.value <= 100 && percentage.value >= 0) {
    } else {
      percentage.value = 0;
    }
    progress.style.width = percentage.value + "%";
    progress.innerHTML = percentage.value + "%";
  }, 500);
};
