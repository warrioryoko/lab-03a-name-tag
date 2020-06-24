const header = document.getElementById('header');
const tagBottom = document.getElementById('tag-bottom');

const myButton1 = document.getElementById('my-special-button1');
const myButton2 = document.getElementById('my-special-button2');
const myButton3 = document.getElementById('my-special-button3');

const myInput = document.getElementById('my-special-input');
const tagNameField = document.getElementById('tag-name-field');

myInput.addEventListener('input', () => {
  myInput.value 
})

myButton1.addEventListener('click', () => {
  // tagTop.style.background = "pink";
  tagBottom.style.background = "pink";
  header.style.background = "pink";
})

myButton2.addEventListener('click', () => {
  // tagTop.style.background = "lightgreen";
  tagBottom.style.background = "lightgreen";
  header.style.background = "lightgreen";
})

myButton3.addEventListener('click', () => {
  // tagTop.style.background = "lightblue";
  tagBottom.style.background = "lightblue";
  header.style.background = "lightblue";
})