const label__firstname = document.querySelector(".label__firstname");
const input__firstname = document.querySelector(".input__firstname");
const label__email = document.querySelector(".label__email");
const input__email = document.querySelector(".input__email");
const label__password = document.querySelector(".label__password");
const input__password = document.querySelector(".input__password");
const form__label = document.querySelector(".form__label");
const input__password__check = document.querySelector(
  ".input__password__check"
);
const btn = document.querySelector(".btn");
const error_message = document.querySelector(".p__error");
const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  let errors = [];

  if (input__firstname) {
    // if we have input__firstname => signUP
    errors = getSignupFormErrors(
      input__firstname.value,
      input__email.value,
      input__password.value,
      input__password__check.value
    );
  } else {
    // if we dont have input__firstname => login
    errors = getLoginFormErrors(input__email.value, input__password.value);
  }

  if (errors.length > 0) {
    // If there are any errors
    e.preventDefault();
    error_message.textContent = errors.join(". ");
  }

  // error_message.textContent = errors; // get from FUNC getSignupFormErrors and FUNC getLoginFormErrors
  // e.preventDefault();
});

function getSignupFormErrors(firstname, email, password, repeatPassword) {
  let errors = [];

  if (firstname === "" || firstname == null) {
    errors.push("Firstname is required");
    input__firstname.parentElement.classList.add("is__error");
  }
  if (email === "" || email == null) {
    errors.push("Email is required");
    input__email.parentElement.classList.add("is__error");
  }
  if (password === "" || password == null) {
    errors.push("Password is required");
    input__password.parentElement.classList.add("is__error");
  }
  if (password.length < 8) {
    errors.push("Password must have at least 8 characters");
    input__password.parentElement.classList.add("is__error");
  }
  if (password !== repeatPassword) {
    errors.push("Password does not match repeated password");
    input__password.parentElement.classList.add("is__error");
    input__password__check.parentElement.classList.add("is__error");
  }

  return errors;
}

// function getLoginFormErrors() {}

allInputs = [
  input__firstname,
  input__email,
  input__password,
  input__password__check,
];

allInputs.forEach((item) =>
  item.addEventListener("input", function () {
    console.log(item);
    if (item.parentElement.classList.contains("is__error")) {
      item.parentElement.classList.remove("is__error");
      error_message.innerText = "";
    }
  })
);
