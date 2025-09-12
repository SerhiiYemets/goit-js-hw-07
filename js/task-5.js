function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

if (!button || !colorSpan) {
  console.error('Елементи button або span не знайдено');
  return;
}

button.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;

  console.log(randomColor);
});




