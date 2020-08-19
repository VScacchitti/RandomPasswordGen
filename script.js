var confirmLength;
var confirmNum;
var confirmChar;
var confirmLower;
var confirmUpper;

var character = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// Numeric characters
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// alphaLowbetical characters
var alphaLow = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var alphaUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var userChoice;

var generateBtn = document.querySelector("#generate");
//On Click button function
generateBtn.addEventListener("click", function () {
  passsword = generatePassword();
  document.getElementById("#passoword").placeholder = passsword;
});
// generates random password using arrays
function generatePassword() {
  confirmLength = prompt(
    "How many characters would you like your password to be? Please choose between 8-128."
  );
  // while loop to conifrm length with-in given parameters
  while (confirmLength <= 7 || confirmLength >= 129) {
    alert(
      "Password length must be between 8 and 128 characters. Please try again"
    );
    confirmLength = prompt(
      "How many characcters would you like your password to be? Please choose between 8-128"
    );
  }

  alert(`You have choosen ${confirmLength} charaters for your password`);

  confirmNum = confirm("Will this passsword contain numeric characters?");
  confirmChar = confirm("Will this password contain special characters?");
  confirmLower = confirm("Will this password contain lowercase letters?");
  confirmUpper = confirm("WIll this password contain uppercase letters?");

  if (!confirmNum && !confirmChar && !confirmLower && !confirmUpper) {
    alert(
      "You must choose atleast one criteria to continue. Please try again."
    );
    //all 4 criteria are choosen
  } else if (
    confirmNum === true &&
    confirmChar === true &&
    confirmLower === true &&
    confirmUpper === true
  ) {
    userChoice = number.concat(character, alphaLow, alphaUpper);
    //3 criteria are choosen
  } else if (
    confirmNum == true &&
    confirmChar === true &&
    confirmLower === true &&
    !confirmUpper
  ) {
    userChoice = number.concat(character, alphaLow);
  } else if (
    (confirmNum =
      true && confirmChar === true && confirmUpper === true && !confirmLower)
  ) {
    userChoice = number.concat(character, alphaUpper);
  } else if (
    confirmNum === true &&
    confirmLower === true &&
    confirmUpper === true &&
    !confirmChar
  ) {
    userChoice = number.concat(alphaLow, alphaUpper);
  } else if (
    confirmChar === true &&
    confirmLower === true &&
    confirmUpper === true &&
    !confirmNum
  ) {
    userChoice = character.concat(alphaLow, alphaUpper);
    // 2 criteria are choosen
  } else if (
    confirmNum === true &&
    confirmChar === true &&
    !confirmLower &&
    !confirmUpper
  ) {
    userChoice = number.concat(character);
  } else if (
    confirmNum === true &&
    confirmLower === true &&
    !confirmChar &&
    !confirmUpper
  ) {
    userChoice = number.concat(alphaLow);
  } else if (
    confirmNum === true &&
    confirmUpper === true &&
    !confirmChar &&
    !confirmLower
  ) {
    userChoice = number.concat(alphaUpper);
  } else if (
    confirmChar === true &&
    confirmLower === true &&
    !confirmNum &&
    !confirmUpper
  ) {
    userChoice = character.concat(alphaLow);
  } else if (
    confirmChar === true &&
    confirmUpper === true &&
    !confirmNum &&
    !confirmLower
  ) {
    userChoice = character.concat(alphaUpper);
  } else if (
    confirmLower === true &&
    confirmUpper === true &&
    !confirmNum &&
    !confirmChar
  ) {
    userChoice = alphaLow.concat(alphaUpper);
    //single criteria choosen
  } else if (
    confirmNum === true &&
    !confirmChar &&
    !confirmLower &&
    !confirmUpper
  ) {
    userChoice === number;
  } else if (
    confirmChar === true &&
    !confirmNum &&
    !confirmLower &&
    !confirmUpper
  ) {
    userChoice === character;
  } else if (
    confirmLower === true &&
    !confirmNum &&
    !confirmChar &&
    !confirmUpper
  ) {
    userChoice = alphaLow;
  } else {
    userChoice = alphaUpper;
  }
}
