/**
 * Write your challenge solution here
 */

const heading = document.getElementById("mainHeading");
const red = document.getElementById("redButton");
const green = document.getElementById("greenButton");
const blue = document.getElementById("blueButton");
const purple = document.getElementById("purpleButton");
const reset = document.getElementById("resetButton");

red.addEventListener("click", () => {
  heading.style.color = "#e74c3c";
});

green.addEventListener("click", () => {
  heading.style.color = "#2ecc71";
});

blue.addEventListener("click", () => {
  heading.style.color = "#3498db";
});

purple.addEventListener("click", () => {
  heading.style.color = "#9b59b6";
});

reset.addEventListener("click", () => {
  heading.style.color = "black";
});
