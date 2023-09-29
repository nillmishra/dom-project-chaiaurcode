//this usecase will give you empty
//const height = parseInt(document.querySelector('#height').value)
const form = document.querySelector('form');
// Get the results element

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = 'Please give a valid height';
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    let message = '';

    if (bmi < 18.6) {
      message = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = 'Normal Range';
    } else {
      message = 'Overweight';
    }
    results.innerHTML += `<p>${message}</p>`;
  }
});
