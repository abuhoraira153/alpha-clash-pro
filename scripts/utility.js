// function hideElementById(elementId) {
//   const element = document.getElementById(elementId);
//   element.classList.add("hidden");
// }

// function showElementById(elementId) {
//   const element = document.getElementById(elementId);
//   element.classList.remove("hidden");
// }

// function setBackgroundColorById(elementId) {
//   const element = document.getElementById(elementId);
//   element.classList.add("bg-orange-400");
// }
// function getRandomAlphabet() {
//   const alphabetsString = "abcdefghijklmnopqrstuvwxyz";
//   const alphabets = alphabetsString.split("");
//   //   console.log(alphabets);

//   const randomNumber = Math.random() * 25;
//   const index = Math.round(randomNumber);
//   const alphabet = alphabets[index];
//   return alphabet;
//   //   console.log(index, alphabet);
// }

function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function getRandomAlphabet() {
  const alphabetsString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetsString.split("");

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  return alphabet;
}

function setBackgroundColorById(elementId) {
  const setBackgroundColor = document.getElementById(elementId);
  setBackgroundColor.classList.add("bg-orange-300");
}

function removeBackgroundColorById(elementId) {
  const removeBackgroundColor = document.getElementById(elementId);
  removeBackgroundColor.classList.remove("bg-orange-300");
}

function getElementVlueById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const value = parseFloat(elementText);
  return value;
}

function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}
