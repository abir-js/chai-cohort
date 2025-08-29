
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const results = document.querySelector("#results");

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = 'Enter a valid height';
  }

  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = 'Enter a valid weight';
  }

  else {
    const bmi = (weight / ((height * height)/10000)).toFixed(2)
    results.innerHTML = bmi
  }


});

