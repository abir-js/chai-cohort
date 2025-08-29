document.getElementById("button").addEventListener('click', () => {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    let bmi = weight / (height * height);
    document.getElementById('result').innerText = `Your BMI is: ${bmi.toFixed(2)}`;
});