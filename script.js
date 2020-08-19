// Variable Declaration
var confirmLength;
var confirmNum;
var confirmChar;
var confirmLower;
var confirmUpper;
//
character = [
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
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// alphaLowbetical characters
alphaLow = [
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

alphaUpper = [
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
  newPass = generatePassword();
  document.getElementById("#passoword").placeholder = passsword;
});
// generates random password using arrays
function generatePassword() {
  confirmLength = prompt(
    "How many characters would you like your password to be? Please choose between 8-128."
  );
  userChoice = alert(
    `You have choosen ${confirmLength} charaters for your password`
  );
  // while loop to conifrm length with-in given parameters
  if (!confirmLength) {
    alert(
      "Password length must be between 8 and 128 characters. Please try again"
    );
  } else if (confirmLength < 8 || confirmLength > 128) {
    alert("You must choose between 8-128 characters");
  } else {
    confirmNum = confirm("Will this passsword contain numeric characters?");
    confirmChar = confirm("Will this password contain special characters?");
    confirmLower = confirm("Will this password contain lowercase letters?");
    confirmUpper = confirm("WIll this password contain uppercase letters?");
  }

  if (!confirmNum && !confirmChar && !confirmLower && !confirmUpper) {
    userChoice = alert(
      "You must choose atleast one criteria to continue. Please try again."
    );
  } else if (confirmNum && confirmChar && confirmLower && confirmUpper) {
    userChoice = number.concat(character, alphaLow, alphaUpper);
  } else if (confirmNum && confirmChar && confirmLower) {
    userChoice = number.concat(character, alphaLow);
  } else if (confirmNum && confirmChar && confirmUpper) {
    userChoice = number.concat(character, alphaUpper);
  } else if (confirmNum && confirmLower && confirmUpper) {
    userChoice = number.concat(alphaLow, alphaUpper);
  } else if (confirmChar && confirmLower && confirmUpper) {
    userChoice = character.concat(alphaLow, alphaUpper);
    // 2 criteria are choosen
  } else if (confirmNum && confirmChar) {
    userChoice = number.concat(character);
  } else if (confirmNum && confirmLower) {
    userChoice = number.concat(alphaLow);
  } else if (confirmNum && confirmUpper) {
    userChoice = number.concat(alphaUpper);
  } else if (confirmChar && confirmLower) {
    userChoice = character.concat(alphaLow);
  } else if (confirmChar && confirmUpper) {
    userChoice = character.concat(alphaUpper);
  } else if (confirmLower && confirmUpper) {
    userChoice = alphaLow.concat(alphaUpper);
    //single criteria choosen
  } else if (confirmNum) {
    userChoice = number;
  } else if (confirmChar) {
    userChoice = character;
  } else if (confirmLower) {
    userChoice = alphaLow;
  } else {
    userChoice = alphaUpper;
  }
  // empty array for randomly selected password characters
  var password = [];

  // for loop to get random characters
  for (var i = 0; i < confirmLength; i++) {
    var userPicks = userChoice[Math.floor(Math.random() * userChoice.length)];
    password.push(userPicks);
  }
  // Shoutout to Eric for posting the array methods from W3!
  var newPass = password.join("");
  writePassword(newPass);
  return newPass;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function writePassword(newPass) {
  document.getElementById("password").textContent = newPass;
}
