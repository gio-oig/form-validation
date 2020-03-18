const check = new Check();
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
  e.preventDefault();

  check.checkRequired([username, password, password2]);
  check.checkLength(username, 3, 15);
  check.checkLength(password, 6, 25);
  check.checkEmail(email);
  check.checkPasswordMatch(password, password2);
});

// show input error

// function showError(input, message) {
//   const formControl = input.parentElement;
//   formControl.className = 'form-control error';
//   const small = formControl.querySelector('small');
//   small.innerText = message;
// }

// //show input succsess
// function showSuccess(input) {
//   const formControl = input.parentElement;
//   formControl.className = 'form-control success';
// }

// function checkEmail(input) {
//   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (re.test(input.value.trim())) {
//     showSuccess(input);
//   } else {
//     showError(input, 'Email in not valid');
//   }
// }

// function checkPasswordMatch(input1, input2) {
//   if (input1.value !== input2.value) {
//     showError(input2, 'Passwods do not match');
//   }
// }

// function checkRequired(inputArr) {
//   inputArr.forEach(input => {
//     if (input.value.trim() === '') {
//       showError(input, `${getFildName(input)} is required`);
//     } else {
//       showSuccess(input);
//     }
//   });
// }

// // get each input name
// function getFildName(input) {
//   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// function checkLength(input, min, max) {
//   if (input.value.length < min) {
//     showError(input, `${getFildName(input)} must be at least ${min}characters`);
//   } else if (input.value.length > max) {
//     showError(
//       input,
//       `${getFildName(input)} must be less than    ${max} characters`
//     );
//   }
// }