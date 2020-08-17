// Assignment Code
var generateBtn = document.querySelector("#generate");
// Various Character Arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [
  "!",
  "%",
  "&",
  ",",
  "*",
  "+",
  "-",
  ".",
  "/",
  "<",
  ">",
  "?",
  "~",
];
var alphaLowCase = [
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
var alphaUpCase = [
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
// Variables
var confirmPassLength = "";
var confirmSpecialChar;
var confirmNumChar;
var confirmUpCase;
var confirmLowCase;

//Prompt to confirm the length of user password

function generatePassword() {
  var confirmLength = prompt("Please enter desired password length?");
  //Loop for confirming password length
  while (confirmLength <= 8 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters");

    var confirmLength = prompt("Please enter desired password length?");
  }

  alert(`Your password will have ${confirmLength} characters`);
  //Confirm  password criteria
  var confirmSpecialChar = confirm(
    "Click OK to confirm you would like to use special characters in your password!"
  );
  var confirmNumChar = confirm(
    "Click OK to confirm you would like to use numberic characters in your password!"
  );
  var confirmUpCase = confirm(
    "Click OK to confirm you would like to use uppercse characters in your password"
  );

  var confirmLowCase = confirm(
    "Click OK to confirm you would like to use lowercase characters."
  );
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
