// Assignment Code
// User Input Variables
var confirmLength;
var confirmNum;
var confirmChar;
var confirmUpper;
var confirmLower;
//Start Password with variable values.
//Special Characters
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
  "\\",
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
// Alphabetical characters
var alpha = [
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
// Space is for the Uppercase conversion
var space = [];
//Choices declared now to be used later
var choices;
// creates varuable to uppercasw conversion
var toUpper = function (x) {
  return x.toUpperCase();
};
//Creates variable for uppercase converion.
var alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});
// starting the function
function generatePassword() {
  confirmLength = prompt(
    "How many characters would you like the password to have? Please choose between 8-128."
  );

  while (confirmLength <= 7 || confirmLength >= 51) {
    alert("Password length must be between 8-50 characters Try again");
    confirmLength = prompt(
      "How many characters would you like your password to contain?"
    );
  }

  alert(`You have choosen ${confirmLength} characters for your password!`);

  confirmNum = confirm("Will this password contain numbers?");
  confirmChar = confirm("Will this password contain special characters?");
  ConfirmLower = confirm("Will this password contain lowercase letters?");
  ConfirmUpper = confirm("will this password contain uppercase letters?");
}
