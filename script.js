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
  //While Loop for password length
  while (confirmLength <= 7 || confirmLength >= 51) {
    alert("Password length must be between 8-50 characters Try again");
    confirmLength = prompt(
      "How many characters would you like your password to contain?"
    );
  }
  // Alert the user choice
  alert(`You have choosen ${confirmLength} characters for your password!`);
  // confirm
  confirmNum = confirm("Will this password contain numbers?");
  confirmChar = confirm("Will this password contain special characters?");
  ConfirmLower = confirm("Will this password contain lowercase letters?");
  ConfirmUpper = confirm("will this password contain uppercase letters?");

  if (!confirmNum && !confirmChar && !confirmLower && !confirmUpper) {
    choices = "You must choose at least one criteria!";
    //all 4  criteria are choosen
  } else if (confirmNum && confirmChar && confirmLower && confirmUpper) {
    choices = numberr.concat(character, alpha, alpha2);
    //if 3 criteria are choosen
  } else if (confirmNum && confirmChar && confirmLower) {
    choices = number.concat(character, alpha2);
  } else if (confirmNum && confirmChar && confirmUpper) {
    choices = number.concat(character, alpha2);
  } else if (confirmNum && confirmLower && confirmUpper) {
    choices = number.concat(alpha, alpha2);
    //if two criteria are choosen
  } else if (confirmNum && confirmChar) {
    choices = number.concat(character);
  } else if (conirmNum && confirmLower) {
    choices = number.concat(alpha);
  } else if (confirmNum && confirmUpper) {
    choices = number.concat(alpha2);
  } else if (confirmChar && confirmLower) {
    choices = character.concat(alpha);
  } else if (confirmChar && confirmUpper) {
    choices = character.concat(alpha2);
  } else if (confirmLower && confirmUpper) {
    choices = alpha.concat(alpha2);
    //if one criteria is choosen
  } else if (confirmNum) {
    choices = number;
  } else if (confirmChar) {
    choices = character;
  } else if (confirmLower) {
    choices = alpha;
  } else {
    choices = alpha2;
  }
}
