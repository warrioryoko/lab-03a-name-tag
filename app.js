const header = document.getElementById('header');
const tagBottom = document.getElementById('tag-bottom');

const myButton1 = document.getElementById('my-special-button1');
const myButton2 = document.getElementById('my-special-button2');
const myButton3 = document.getElementById('my-special-button3');
const myButton4 = document.getElementById('my-special-button4');

const myInput = document.getElementById('my-special-input');
const myInputButton = document.getElementById('my-input-button');
const tagNameField = document.getElementById('tag-name-field');
const changeLabel = document.getElementById('times-changed');

// let nameDisplay = tagNameField.textContent;
let changeCounter = 0;

myInputButton.addEventListener('click', () => {
  let nameValue = myInput.value;
  console.log(nameValue)
  tagNameField.textContent = nameValue;
  changeCounter++;
  changeLabel.innerText = changeCounter;
})

myButton1.addEventListener('click', () => {
  tagBottom.style.background = "pink";
  header.style.background = "pink";
  changeCounter++;
  changeLabel.innerText = changeCounter;
})

myButton2.addEventListener('click', () => {
  tagBottom.style.background = "lightgreen";
  header.style.background = "lightgreen";
  changeCounter++;
  changeLabel.innerText = changeCounter;
})

myButton3.addEventListener('click', () => {
  tagBottom.style.background = "lightblue";
  header.style.background = "lightblue";
  changeCounter++;
  changeLabel.innerText = changeCounter;
})

myButton4.addEventListener('click', () => {
  tagBottom.style.background = "red";
  header.style.background = "red";
  changeCounter++;
  changeLabel.innerText = changeCounter;
})