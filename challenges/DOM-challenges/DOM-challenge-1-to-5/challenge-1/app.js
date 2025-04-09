/**
 * Write your challenge solution here
 */

const body = document.querySelector("body");

const bulb = document.getElementById("bulb");

const btn = document.getElementById("toggleButton");

btn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    btn.innerText = "Turn Off";
  } else {
    btn.innerText = "Turn On";
  }

  bulb.classList.toggle("off");

  let switch_status = document.querySelector(".switch-status")
  if (switch_status.classList.contains("off")) {
    switch_status.innerText = "Status: Off";
  } else {
    switch_status.innerText = "Status: On";
  }
});
