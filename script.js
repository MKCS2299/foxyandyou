let step = 0;

const calendar = document.getElementById("calendar");
const fox = document.getElementById("fox");
const text = document.getElementById("text");
const light = document.getElementById("light");

const months = [
  "February",
  "May",
  "November"
];

const texts = [
  "Some things don’t need to be said.",
  "They’re noticed by staying.",
  ""
];

function showText(content) {
  text.classList.remove("show");
  setTimeout(() => {
    text.innerHTML = content;
    if (content) text.classList.add("show");
  }, 300);
}

function nextStep() {
  if (step === 0) {
    calendar.innerText = months[0];
    showText(texts[0]);
    step++;
  }
  else if (step === 1) {
    calendar.innerText = months[1];
    showText(texts[1]);
    step++;
  }
  else if (step === 2) {
    calendar.innerText = months[2];
    text.classList.remove("show");
    step++;
  }
  else if (step === 3) {
    light.classList.add("show");
    fox.classList.remove("waiting");
    fox.classList.add("happy");
    showText("I’m still here.");
    step++;
  }
}

// initial
calendar.innerText = months[0];
showText(texts[0]);
