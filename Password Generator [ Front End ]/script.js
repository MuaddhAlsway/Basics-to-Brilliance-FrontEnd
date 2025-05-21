   const passwordInput = document.querySelector(".password-box input"),
  copyIcon = document.querySelector(".password-box .copy-icon"),
  rangeInput = document.querySelector(".range-box input"),
   sliderNumber = document.querySelector(".range-box .slide-number"),
  generateButton = document.querySelector(".generate-button");


let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~";// this function will be called page, page reload, generateButton clicked & rangerInput slide
const generatePassword = () => {
  let newPassword = "";
  for (let i = 0; i < rangeInput.value; i++) {
    let randomIndex = Math.floor(Math.random() * allCharacters.length);
    newPassword += allCharacters[randomIndex];
  }
  passwordInput.value = newPassword;

  // Reset icon to copy when new password is generated
  copyIcon.classList.replace("uil-file-check-alt", "uil-copy");
};

rangeInput.addEventListener("input", () => {
  sliderNumber.innerText = rangeInput.value;
  generatePassword();
});

//copy password's value on copyIcon click

copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);

  // Change icon to success check when copied
  copyIcon.classList.replace("uil-copy", "uil-file-check-alt");
});

generatePassword()
generateButton.addEventListener("click", generatePassword);

   